/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3UbcZRKcXPMSzGkYhRV3K8DcSUruieqXEkNxY257prepqQUQzvWTSDpZDV8JPLp5vNHJHE2tFXihAjBspA6XBsBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TA9kpy24doQfRqGhFy6YKNuEgidRAW2WJWnRmzVcAEtyo8oGwPwrqGZC6cVBECRzUT58cWf8MHjGT9hrR4msoX",
  "key1": "32LjjydxtE9MkMByaGpmdXa3rufZtm3xsUKmWmcDgJ4HDzqCP1Pt6CLWbkzgCZ5PkdozA1gRJ9teomdb2cba6yyh",
  "key2": "48QKHqEaMYM2MA91uy7zdzADQuNGcKgeymbWtgsK5XtpWwuCvNWQaJhmykdzBc2YvexkWDbZj9m3AjhhCT7xxeNT",
  "key3": "3SZ5RueBSH8eFp1Wd5m8PzYxoiNNi7pGjGdMahv8zyhSoij6g62vDVXpwNN93joExbtmh7S9789mwcdam6eVHLqX",
  "key4": "64kV2p4WmNynxtu9ARuQe2s7xLHNzw3YxQnnQQGUgwxaPe6Ha129ybAUMY8ndEQAmg36tnCBwkmJJuS9rufRDG5m",
  "key5": "2QFu342Ysh8taWAW2gMhM6QT1xkuoU3LqpnnJXoosvxYj5u6JCyt8osQ5A1FWXX5rVbbpS5s7K63NoKu2UiPmtfU",
  "key6": "3yZBCokag2nMyGvhkXiZC5wngDiF9iLoZCkjEWxCoEcgUXU1FnocMpsPvytn3mKMeQpz7UVovz7Pqf26Y6wEqjpk",
  "key7": "21HBrtmYUWLa7DXL7B8btFYHHRc4XV8NQA9xA4VGWgXZTUCh3zNnVkULPFhKYbUqcn8s9M1xLabNiZYkj9q8mh7c",
  "key8": "4asVK9djqr12Pn7EVMpKWK2VXWsVjadPCYihWUZs4J3oWj4pCuYrDETQzq6NwzE9tTdG6WMhEau8W7jRaSX7LzGF",
  "key9": "Sfw3jacVzkGNoDckw2ggL2bS9qakbHJEYkC8AkX8mQNCVRqSfJHVQaKrhn1p5LSNysT5JZ811BAfTGdXTGx2anv",
  "key10": "3MeuSXiAA2TRwyxEL3Ye7Z3N4A4Va3eRAuhMkWF7Xqq7bSHkS6EGdBFsko1mU2PJeB6y5Pc4qy3Cea2oTTQyKRYF",
  "key11": "XLvSMTA8hyzGtNZWiAwxcpmKo9KRN5f9sCxWy5wm5AfEpnN8ZAFxj54nUWQL3vYSaPRCXEkcACxELp36sVfqKq4",
  "key12": "4SUiuFFEb2x2i3JeL3tEN6qWmPTHPRr845wPjJ1JksLtFftRL3cTdw9ec9HxxC1TqVjCLFcPHPZ83M17pnSy6dWp",
  "key13": "4uNp1U2zNUeXZdR9CNjeE8Wg7hc4ERwChv8bcihPjwd9qHQT8oz8y7EeraRTwHjW3vRTqZXtwHysTyypyH7sBaqn",
  "key14": "2gfDTPCM1euwF8ZX6h6Uzhv2nsAqVww2Mj461wnncVPk5Qxznsd7q3YvpjrQupCSaLhdUMyivKrWZ8uytCHGCEij",
  "key15": "t6PcXA4hFGP8TCadQ2UsDGVzqWCWLwn75kxiZK4opr17atGs7UTyzApSktejs7CeZCJo4wm4CcBQpZi7kPULXkR",
  "key16": "2m3VG2wVfMwSxX2owbW2FnH32EugyprRpjWuKbgRuAR1esJcJin2VuaB1AbmYgosLF112iBj28LuXgrXjkJfsUcD",
  "key17": "2knCiEz3fHPS8uxYobm26p5SdaUhc4EPCK9aPjV9Nf43F9mBAjtFdneoyCjv43hLsnqVLnFcWWRvMfDoKEbyw9ab",
  "key18": "47dJzQzx3Ah9PDnpZwsHqyBicE6wbfFKRvdCs8SZR3ahKLXDuPxKVa7D3HqwbatrbsSY9BEkxfS2XjcLWGQtg8dW",
  "key19": "3aWPnWnzZH158NCA2DSTw3euFBo9Lfr4obbVSRAZ2BUEkVDp7xyrPCBDeVi5B58pHoXGth9uorTnz3AanZyBq3e6",
  "key20": "5sQooE4kVc9Bs1GfAFE6auYFaZsTQZ9i8ugZP6LYofJKP913vjCax8uHYNTSA8FCn9iFt1fesoRB1hx7ust4wJQA",
  "key21": "5F1ZYGAoLzUyN84oqRwqZaYrHcL7SpjTPRv2uaxPvZE3LU5nCBCZggtzJDEs5E3s5Cvv8mMKSQgPz5G4H7EAgs68",
  "key22": "4rkYDiQroNHn5hAo5iLzq4ubZqccdsiMrKbDM9k4x4ZBnx59YSP3xmLiFaiD1s7WuRHyQooiZ5SEXsGKkMcXeD27",
  "key23": "22sH41Y6q2Cd9na5SSEpuz1WA6BDxc2vFTHBrTmB3r3JGPvj95RBPLN1YMUDrUtdzp5aX8Nc1HWmiJgCgf8zDJ1e",
  "key24": "46USZT1VAaGBWowy9tfJ2p74jv6TJGHdUvfnvrJH7spZMBsfMwkbmopQHArpRkpBYELASt64dWs5qUHhnBq3WBR6",
  "key25": "53d75WQRTjZuZ5pZM3YrDp4WvGXHM4AgyNAEZjGKYrjk63opZHWvv4i5H4yEpsT1vWp16DV2xXLKk55oLjKB82Mv"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
