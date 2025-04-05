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
    "4Pc6uednuRSRU321oFiE9x3mFbdtU8obRPmvHiPBMwWVjEXEEWDR2ZXSTSL29SDqvcNfkqgmvPhQiWhRUQFzn61S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwTiK85z97do8PFpgiigVnERoS7d3V2XUVCWDTq7dgzbvqjaV8Qnoo4DcoGZLzd8hjRgrhisxBCXSE7Q2z5A2im",
  "key1": "f6xjEqJ4KLoZ33Ahowc2PsyjAj1iv8gSGRKytmHEgKZBMD4SD1AHodEUPJWS67fvM2KpA5yZ8mvd6ucJRNS2mdc",
  "key2": "Zg3SP9c3viJ93VzfEKx7nRrKNh5mUvoWevV71RUzYgCFugrmGivW7mUdD2hE5K9MV1jH1pDi3f5s6gd1fqTS1ir",
  "key3": "4T3JT5dQbmGqvwQ44MZsZ3oy5Yg4X8o3cYBNbcQzXjYFDzquW97obZUVkYiekp3gP2a39KQNEkkU9B5R7bKLcbyk",
  "key4": "j5FLyVLit67Sjpa9mDpF97q7MY5w1ypyeYJYJp5WyzoLhgbvYihyJACqcDLYTscmFRtudvGu55egKSqFtpgvDL6",
  "key5": "4W3zzTFZh7tL3BzZ3E2FZYJkehZVy7ZCK56iNWMFqUMWkutn1YhLSf3CcexTAH2ffgyAFq3mUnFbuxJxoHwoV8WX",
  "key6": "ziRm9Z6zVGrwQLwBwJKZUnhAjbyj2qrdFsWqwvgsuG2LtEgYvQrkK5m14H7xg1aVzJDnqJGdvkbmst145RNa7re",
  "key7": "3bawqgZm9cbzMypog93LC7t76Ut38Sbc79r1yVJgpiKNMUJjq9EQWfjnggzneogmLuAFFCTB8TfzHJXaniJRAyJS",
  "key8": "4T2McHKgCjQxsqZ96s7rv39opXnfF2iug6KpfWde68Ne44k4aWwsqndgMHrD7qj9XFkLDDn2roDnNze47mgmtdDN",
  "key9": "21FLhfYtpkaRu2xJ3FN1pJCn5kcvA6feNmJJYYfB6eeeTWvjv5AqExVoHREu25JLmdxqygAe4syH5FGP2n64PMUk",
  "key10": "B9igotv3irK8toYdTcwrJFdrWbyCKHe8VfQaC14eDp4VmipK1PSq76tEarweojUcDBy87QkzzaVCRQG82DJ6eWX",
  "key11": "9MWyJLNKiKPRB78ATPknFXN7juiu7hhd5vc7QLBQm8xzo4K8eDCzBVTRzWeW58ee3neT3oeqN865aEPfTJjmWyU",
  "key12": "3rHJFwxofYoNxqAcT4fuEhW18JBdHYx2sdnAG5nwXWVCJ2rb5vmczXa7Wi6Kc8K9EF63L5mLGEruWbGn5QYvnopa",
  "key13": "4Pta687CWFEbKKYZpQBiB5trRF7iBvxaPonyDZGUfgY1NtrsUqpas2J7fxiTis3ervnY62nDTyVeqmbZhpX5sGWy",
  "key14": "4ni2b3wz87k1cWdjDo7aPMR3p1fX2N6JobcH3xhsdG8ccf57FZBSmD9XyJkedjoURwwTrKv4srKkguVHdQ6Sp7uN",
  "key15": "5rx6tUeGDVxGzc7CcsjC2HTjkNmPSiJb6Xzxkg3Q42CSocBoCAhYQN3wkWfKsF6c1WRgKUvx8XR2kqKYQVrDsBMb",
  "key16": "3aG6BoUxTB7kSzXxqnRm9Z2oxMcnFP6mqLxVug4bJNzP5UFxyk7toP7LYNtMFjSYdg9q2uLjG9HvpcKriuZaLErJ",
  "key17": "5uSRjcvQmvvpMXacwdeMQhFxh2sKzGiVf1dtY3NkUarRBcgns7LQso4cU71vSDgs1m2nSh3xQ79f7SFVs27A6TLM",
  "key18": "56mamCsgkQbjbAoeAhTidhdazogfAMbadW9k7jAdnf8hwtHqUQMMZPoNYVZSDG13MEx3yLyecPZuZUFgxPDyEs4y",
  "key19": "4LKh1R6hHaK2DbgQJa1pDqFu9NWj9EkuUiHcSge3x5HMgFZ8boezbTvFsUFfJZexSYNG1HMvcnrQzbBXTnSmWrp4",
  "key20": "5GFjrCbCsSfN22mQVVbyb2WRWtQ4qaiZWUXM7rtBoHU9x699f3yiaDL21KmejKhcq8yyoUU49U4vip9SugfZSCTP",
  "key21": "3kLhp7uxoeyDzePaZpTXSM9RbrohDbU2BmBRKGQKDjVDz6sg5nYNRCJAanaF5UPHa9r7BLt61UAKUmZz7uPAaTU8",
  "key22": "3r5uNaoUQFCQWco6FM4LxzD9gKiyFXamzhvcbLhbrqxXAww13JNj619znhsidSFmw77HSBMW6xpiCL25q1R5FhrB",
  "key23": "2QbDRys4MuwidRgwFmMCz4BbsYKuc4GvatxmFaPg5XZkDoDrbEnA26do8pWNxGHMNRJrFjyAuhGPBLs7mx7QSkSf",
  "key24": "58P6VtHmZvUt7J3UpWSuVZmR2bVu6NHowvHuTrTNz7uh4U3BmgFJL3UDUgdAwhfms57zfc2gYBgpRsXBi9paY4Td",
  "key25": "2N3cEXdQQ55VxvKCD2pEji2VrLNZ5ijeVgHzASpNBx8zznbUXAeWcrSa5SNggVACmG6UPMLTuDXWJpzevYDinUrF",
  "key26": "5EZwLhBbgjKKTWfavWVin9ubgmGVTVvybmUeiD8DLkaQ2AHyJEwcbLcdGP31avffNMRc5RetGhLoJxxjCcC9JxSB",
  "key27": "43YEa5vocuXm52Hc5BxD8tLSS5kFoZvf4VFn3hdDHN2Da4qSrYxKi4WF6du2zoPaP2TBoiyNsUuEN55eBr9iGUqT",
  "key28": "2RJrpwVce548FotpCUyBZZnngN9iesPK9igAQCebADdvnJZBMrKtJS33GqReoq1K2aBRuwGEXFujg7Tq4fJ2GBXv"
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
