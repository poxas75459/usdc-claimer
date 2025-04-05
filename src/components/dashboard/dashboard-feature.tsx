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
    "32G31ob6KRtAkbRrQKmx3kwtc7mYnU6QXyADMSYdYKXeaawqyf9G83a168qaQMPAGJhqfLE2Eiua7Mnc8vBKgQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUVxyx2wJh8Fi73Y7Hqo1VL2kCWeoG4ABesDsrGaiMuKZarSdQWSvP4ioiPh3sZ4WwWuMm99rhHyF7Kt9aif3wo",
  "key1": "3Wqd5sWobRDxTdqqsmAY2a7uYDnZzh2LfyUkZLXWLGPXebSD9Tc9tnp2bEEUw8jckutuDjp4tZfEa8fwRyH2FVCk",
  "key2": "22PP2ett8EcXxxj2QFoJBcT4KiqnGpodhdzpxwnTRn1M1Kmie3YoTaE1cPrkoLiDQWFJGNWfGVN1a9NRMUcnrS8P",
  "key3": "KvckTNmxspr59f82uMtt9gPt3GDC97qncfu8TrAYHiSQ32YH26nRf67UJw2De5idYx3bi2wFqzrMDLVmidc4M3x",
  "key4": "4XyVFSiQm1dGr63it1njKTV9wnq7tgdaeCc4zUgBxwnZvWk9Y57qS3JDipKqkin9efPuB3smMQYMUqyUzQzGKFTH",
  "key5": "2oxmzKRUhEtTzJn3pBoJqfmcvEhk5JP5vF9irD7zX3y5tEGCi2fPSfWaWf6rm1TRJWCc4kkdtGDRao8LS6cMtCfn",
  "key6": "5QECcfrvZc1Adfqou8mri3V461ayv84bKXNuh4kUJA1e7YotvF3XkCg88kybg6rKX9fd4WcDWyHPjT5VsEDTbrcM",
  "key7": "UTFfVWjHBk3VPwjUBUxAUonYLG96eK8seXXAPHy9mExA4evW4EaQYej5Uu4GHQPjsnBLkw5giooaZQg2N5MwfXx",
  "key8": "24LMLoACQd2nJQGGTtoXd27hqcX1Qm63kHuwGRhscy4a7QSMXgistJShqr36C4V9rmdM9juXSJDuwg8FbFpasboT",
  "key9": "311G1EoASq1aTByGiuq7UyUibnuy56eWrBy5PYCwhDR13KNFmqTCLo1DBnQqcyNTZsLZQEGHPfJmt8VJSTVD7McW",
  "key10": "5b2widR73RNtQUrSuGU9ztN1cYyeYFtnDhRcbohdf6dpAQX5a7LUQqVi8cZqbLbZT5JceeHUJRNBUjyxMUnWHXST",
  "key11": "4MJWXKkjLVHzQceFnWdD12AYkM4kra1m5pZyZUQT1zcV9k3GRWT83e85uCxYVCv3WiMtmzwFoCpoqyfESKYp2fUW",
  "key12": "5JuTKixEUNVCd9H79qP5p6GNAku4o8DTnzjCicmjv1JkyasgGj2SvKEjafWKMeokXeo7w5TVQossjTELwSnMv6E5",
  "key13": "4LPZFqJavmvFUtUH3Uvfz4baZdd6TeMuFbsBNsZaWrXH464MkmeQYrEWdYizAexcjrZtxVr8FKzcn545QB4KKVRu",
  "key14": "3NAzZgj2ox9uoDQcnE8y1TrkSH5HDNbrKoSdz9SWYBQHq4hkHDVyKY4Ne5VvrQszQf3XhNdg9et1Q1K8Hdsa4DRT",
  "key15": "5V7VhQdsdfoFPetgBUhFSHooMKt4iGTCatVWb7xseTxyiZcxVTHV4FYtdMRKEtyLm2WeQ9N4jLea8CggdVunnsT6",
  "key16": "3iv7FmSBeUfVJTDuzqc8raFS6diGbMPr1QpDqMGbFnPzLVa51iyGoZnSxLEeXawgs7TetYMPsTA5VjUHAzjBVvHp",
  "key17": "524ksS4ifLLYTVFCanrPEcHcGx8fvt9Fo362ZqXQGSL78umRFHRPkGp77xfMfpbAGkEuZyqq3Lh5XcLU7UDqeMjs",
  "key18": "3fatB5VPVyfLBkgq5sNge1a7r92z1NmnK3yaKT1LG8Vpod4QXSU43A4edVy1sMjpfzKToUEU3Dvri3xp2M8XtLzf",
  "key19": "667SB2ZuAYqVt77kw2L2N5q8ydqQF36VCvsRexpkjtyKTuzS6KHdPgL9awYiQZWhp3SaKQqSvVvHtxR4f6derS8m",
  "key20": "deDo8MEnHGCbZSvXEQ5tbYV5TZPmdxXGiBUqgsA9ySWvkP3mXJYyjXketZ2Zhg3B7ra9BQj9WtA6nxcmmjTUqWA",
  "key21": "3dAoS5Lyyd3hSkT5gc2P2Dy1B9PnfXBbVJENKVF7zh1cXMmjVbtMoGkt9at6TEMTGSxyv95jKC1QM6JA3i2ff37k",
  "key22": "4VtTPhtuKgzVgKmgRNGiFJHMBCi6mhkApimcGZ5aa6RLzX5qiVdyHLLUfPeZsrcqcfo4otUGwdkSfQaRaGCTZMtL",
  "key23": "PMEjHsBAhJ1Xny99xigH7SkV87BT3rWNaydYCYsvjxhArBJSSAtes9TmVNK5MDXTF4bsL4kniUu8hpXgpmh7E8P",
  "key24": "4CcVLrWwyDhhD33oPn4GL2mBv6558oAViZdGW2FB46Ry22QvPUchr1eEEg5U6kpTPBveB8bgBoBGy8XMUZ4QRYkc",
  "key25": "4TtvGWFN2dH7a41QNeeFxheZCdTe2jnoKQ6ZXJ464ARXtGBWjV6cwzqrdeGPJQsoJQ6mMJzdtB8N9ZMC7D5rYwxf",
  "key26": "2rY7nQ7C1fenK6TS2r4mCUqWX129hWYRHoLXBQozoAgrSBSMf8jHsHq6awo8nzuHpdfJfCFLbpmRQ4zsHiprvypK",
  "key27": "2acJS19Ezfe28pFYmQvUG1KvZxySfhWmMeueAwzgnq3PMYm9oRXU4fJR6oGynm2KmpEjuFjMSsLtjK1fmuWg1VNC",
  "key28": "3PXSaDKFsvQsNmtyuku6MU35tsj1AyAumYWcpYwnNcpdZCktDKhMdH8tArTvZ8rcdUU1bgP2XdYQCcKdw1kREAg1",
  "key29": "4n5rGZbj5iQuuzQYZSEdo4DDWddnG4nQFVtRKDL5obZqUxHDQw1inqSPpFJjdUUiK7zARMJzPjYWtJ7J3A4BA8j3",
  "key30": "2vvN3dHiGmvqZYzbUzE6p46VqdPmdJMdg4i3CZK6cFrfvv9jK4wdYbPqbtEeq8ffHT4cVbjxr1EskSWjguW7HR6r",
  "key31": "V3MTtW1b1KifGZQqeJqhCshyYRs3SvBcbfpJmmKQs8SwDCBHDnToKStmhbXoP5oJR21SPFMhBHmVaYwvHf9etTN",
  "key32": "4RZ6X34csUiFrBaizZ9gHeHmEnjrocQZog8QPudYoNRTJDQtKXcEppaJWCXghaLufFQyzzo1m8oFgUGtqNtneRLT",
  "key33": "4Bg1Cn7DhyCtswVhVAvdS1QqBwbpZxNoA34SBVgdF226LtBWnMdtcf54Skdq328X4WFmkmTWsJfNXtM2ZPx33xyA",
  "key34": "3sE1TyfPNZQrMkjWG2dHq9ujLv1icNti5eUZwV1gb3iF2ZtS31oaGwLwkMGjehErB9hGMvoiccaG2vkZiieLkB6s",
  "key35": "5aCoYgdkqDUr7Bq2eqQwHYnofD7cXSNr72CWCtFxdWgcwoeebYKJzaNVdQgyF85oC1HVdoCb4pWULrLWKMHTNu9q",
  "key36": "5R7LkXVkdqDfiw63E8XTDq5LUyhxTSFSfPz11DRbARhDhaaMbqBjrxoJiKusfTsxMsnPaXftouETiXshr8z1e2NS",
  "key37": "64H2GtiDsLvJU7nyX8hf5991TmCvhM22qk1jNaySx4jV1pQxf1vQjVxouDyNRcxo6yVgUTeJoWWejzYySnGU3Dwh",
  "key38": "BV6pqAoKf35MmcDV5qzfPZbAxS3gRMKNVZx4pYK91cWGe1VRXTZpDvDMp137SCSeMCYUANQ1ZdASVSf5nfukHqa",
  "key39": "5jFMuLvpjW1Gpw9FGYobh5fjk1QusyXRcYpTuh8jFBf3v9nAEFbeDnbEhFYgnakcUo2KJ1rqVtLxchxoWu3FF39f",
  "key40": "5D9d57LN2y3mboJnPuQKzrox4agUAEPy3NRcG871Bo2nXa9DSqvV8xovjxMzz3e1wUD9YBeLus3gekds87ZraiBn",
  "key41": "42Jd6G7nSWpmxZESkaXjaK4u7LgoH6dJ2WaDCqYy8MeUkrJxTNdxBsewob4qoCzumctoRd73KaXuiViYmdwGv8HQ",
  "key42": "64FSDPizpJCZQUurMmrNBMeVpwm8yRC7xWxRRFTNotSaEjbGNtxzDKzjxDvSfcDRSmfJtzMu4Vm4szzg6wa11e8Z",
  "key43": "4JN6iXzPBrGdizibwdVsf6KqyS3uzPZ1eGyLCH8fBY4A8aXB1rQGA1bHt2Rk8ZGi6KPwQhsxj5ihuRhez6ibt2jk"
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
