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
    "sF6i7K1pDkFhgF671NWCgAfRcMFVpm69S1tQJYP2wfYG2RpwgoNHUW3EFf6y62eayNd2R36sJpMzEvwsDbXAtQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ke6P1vpmzQWJnSNtz1S4npgAoKsH7NyNTkXhuYnE22n3eycHPzYEwkqVZwPrno5cZQkZ94zUy42FnqsuMsVs3Lr",
  "key1": "5PpbZy683SdWLzrbVzBusDxdw1f4ZiP47Nom9WxzkQo8uMYYg1h845s17i1xM44E5hPj5QMLQKDFQ3c2oQFR9CXd",
  "key2": "3T7ehx6Msf6W3ikgbo4XRzBQRqUUh4mHSf7MMpgqdWUVvRUJ1E6Q4k5ZWpK949FvWNMyXCd6YC1tVewRtGnX8y4H",
  "key3": "EAYhUfbRht6W5o7ChrfpkvJ3urKMbhzsPSaPQU6TVuvSvwXD69ruMbd8YmEiFcDg9LoZWgWTyUKvfHiw5GA66gW",
  "key4": "5zotEpqoE8md3Mr1Mt33rPmBWAMac2MMekJJ6pCRZWmUpaxgixZf9WMCYVy6cLNAe6TZCp1xFQQLG2q1MXGBzFbh",
  "key5": "3WkF6JNcFFkfxf44Y5i3G31SAhB25uu22LycyRukqA2vy6KdUpQe4wxKFcHCmhDoHUGhBB7zFPcyS6vqNmfbL5L3",
  "key6": "5mE5jeds2tRe33EtsySwkAbzw5gxTPXm6uBJAhZgjt5omcPBpkXeTNFBPmsZvivgMRm9jYsyotPpr12yB6fy67fp",
  "key7": "5N1az4wWyA3hQSxsd6rbqmJDgw55m851S3erpS6DzN3rgc4P1CbVW1hkDmQyRnPHK5E9n5viBcjH1GcKuAkN6EgP",
  "key8": "3koYS6W7ck1dv4wxUcvcJKZsSRsiA76t19kShufsMDhuEZYjzdzdTL8kX2jvC6oUHJifQvcxQGP8bfPT8JmLQiTN",
  "key9": "26pE7vLiMUP57QRzemJMZF1GLzdmyJDoBDy6fTF3v9NREo9qdcpX6wbbAAqHCGWiUUzbRPNqifSXJhg4qKu445KT",
  "key10": "3EtosE27NFzHdEuVuWdgCtVgtwBKU11ufT1Zq122rcrLRvjEZXdDZMXKa84QdhVBuxyxNhqrf7GTyxaVg52utzxC",
  "key11": "5eXP6oV8iFBj8KoVSrvnnB61R3L7z3NyPzknq5rYmS5kqS8yvud3Kt9K75fyzSUs3AktoyRauBcpz1BdSqqurBTq",
  "key12": "3qayZekM496DjpWpUCsxqp9gBJjpKeoMSKvXqPwwmv6fdDo4cbornMnQYASFjcdTk6cB3qaSaSkTM1QgFUngVjgp",
  "key13": "Qy2TXdZ9Dq4YTPjRbCwDxi1uLmaZn9tGckwZEq7fefEG6NetCWTk2vdC2ABLkcnh38SAz3QWuzYaXzzoxeNUZ1b",
  "key14": "3xXtVN29fFqibAjPPCL8WuKcnCvtXggd6WeM7vmQujumtQvECz2BHND9HJKiL4B8jwp38hRCmTtLLCvEAbk4nMKU",
  "key15": "4fwZ3UJFxmge3ZqyCBoc6toFezS7By2wEeyLkpbviDi99XSrgyPDTbR6bk2vpSsm34an4a7areoedB9SjwWBbdpK",
  "key16": "gWCzYtmcL7auyYvqZ1RwRcYGiBtv7WjYyMnzuEegt667X5hTmZHDd9338xDnuXhiprWvLVrDpPGW75vWrm3F5uF",
  "key17": "pVYhBLk7B7rLEGJZrdurd1NMY49NTJuA6x5aRSsRdJBpYyxnTJbvErZWYQGHEvGGueLQK1FoSPkVsZUkkaS2xdV",
  "key18": "4eiJBStGoBTnx8wFqfmm5VS5UjNuARxQCq8yq22UbRQuJhWQfR2NCRtiBJ7AFdwGqtHcNAee6uM1DBWJTY1nUPUH",
  "key19": "td4WYVEbGrXZ4iDNkNdBw1to9cy8M35hKQoTpz9eXv3o8nZY3zPPzkLfRxoT6ECXzAGoitLV8xqB6J1jYrQkEy8",
  "key20": "3Ue7Vcj6niadZYGGEUeiit3ZmWfxhzfTgkkk2FzBPVtCNwkDJUTJpYa2xgSXSMdp4hJPP9gCb1jripP3tDzFt7Mk",
  "key21": "5Ez2Ara3oThK1PG1ALhmcYSdxWmVHzawiiJKpxyPHuSMTjJ3JvmVwGhnUL3Jpp33ABE2ffr982gFndkM7n7quZJh",
  "key22": "4fW5wyCaNFoHYn7NXUN5JpTbRJCrknjj13Y5u4AiHQbMascKvyJz9c1bDg9M4Qk3CX6ERoAjupNSQSRKVYdfEbj1",
  "key23": "4dUcYVihKQHmjwaDLFRYpjAqvBxwdmbEn7uUFX7Uqp4Amf6E5RRB4xeAfr6oUFecFuh8Ei9RYvPcWAsbHxqFiRaK",
  "key24": "5MugeEpMzKeNP1J9mrH4evvXjUkNTz7vL1h4Mvv2PmBYkttrrF9NZJK2Zx66ocoPe1y4DT3JY8h3unuvDZRe2VYC",
  "key25": "3JEq2SfDfqMbuS9t9QjxRiD4LLBNfWc1UiphbxaUGfv1pPW6xxkn1Fnz2tJdn3bymV6PRcBwDBJSFLQgNSRPXrnN",
  "key26": "3E4cVZwFrSvjo6r6qCrfU5nAA2Q1LKK67bC1dKmhA6jDFze78EVsqRkTxMZtjKffK1Dz8wjQNjGGuK9pGXeufucH",
  "key27": "4uc7PoQ3So4pCxsVqrYpJPgWhmL4wB1xofB6P4wcZ2SiCvZusrretVMqRqnSSMzt8j8xTe4S5pbPxdva4Fb9NAoX",
  "key28": "2JR9RWgWVfD8A9osxkaTPQPL3Vdw9xJrgDWE8YbS22N9tqP8b4ed6WRzkqusXnF7TNZ3MBTjq3Can43NLGrkH57G",
  "key29": "Fr1kUenxNrpeuirvcNcCjQAbarLRnhg2h8Ysxi7ST7Fu1UEgAui8fo6FUFsdjWvNbHsC8dMuiWQ3FCWonNiCypt",
  "key30": "3z4dWhNYpSRhaD2s5gBBsjW1K72T7KbgWxyrCstvtUcZ26u3X9y5z4FMweiaVaHSj3ZcH1NZoniCdwEFdC9juevh",
  "key31": "2G8MKhNaNMf7k5RJmBY39xSdQThkBWXSuFYi9cFtL2dgSCTSg2aqmrz6TTbxhLdVLC1qig4czpvy8o2iKbSFQR9n"
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
