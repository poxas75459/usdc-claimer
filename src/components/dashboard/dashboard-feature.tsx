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
    "3grukqyqeKXnzCzVzE8SK3cH9cyTHVY1iQrMpBjshHMAsFBK7GQu3Gj9KAi6ykGMtbzFtTeVBD4aiyrr8q2ujofz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jA9z3DiWnhn3YoYCATGeN93r8ZnpEZRL6SAGjeTY5pJcJneGhsfAK1pTXG5FAN6zExk6aBxP36HkArEcg2Yd6eU",
  "key1": "2p5T79j1GHWBdt3aWys5TGJiHUZw1YtQ4wv54s6diokazdSpfMVhjEdQtPUFibg3WBc2tPvr8WsC1jgbXtHXSPea",
  "key2": "Ca6L7HKAoLz2mus9tCDnP4Nw4fE8fVJf6j2y1izqt8XEmvKtaVPGHZBsbmcUwy7rP52vhkmWJLFVtUyFaa3Ukoi",
  "key3": "2WabDEzzqK55JETewCM6Pq5NeAYxaNQHGAcFicyHjCWUCZ2nX7mXAjMDJnSP2vq88CQX1xLXvhVCNgiSRCv9UraA",
  "key4": "2ZjNULuxLSk7pMzTnt6b6mCcKZPvQDzAhCTqMhvMPF5riJPPphYwZyJukqEHcKTZsYSp3G2Lm1iN9RiEnP68YFLX",
  "key5": "57muv44ZxPQct1zo8wgGxkku7KnBu2kTusQhjJqNMD4SR6jQ85iWxvrBewh65Jubk3iLU8Z7Auw6VVLvrrBKcRy9",
  "key6": "5JDX9BR8Ev8M1GHxvbVATZiHagafMubQv61ogsCZy7eUUJVhou1kSbkRzf9XnCzyqoRY6j5HYXhKhyNC3pEkgUAA",
  "key7": "kDHu6EPqqNBNCCCeQQkm2uKuBM2jVAhQWhJZ2S7jXXtjKgNm5yd6VkRUZXjVaVC9iBUY8RvBEG1CxmTomrHuQis",
  "key8": "3tYCiktNn4xNquDFgmVYT2oLKbwPsESXdjYpqeyFjaF2g4gwDnfzjqATvBs4tAgQyViCJVQfZtp4H6fXu4auMbSd",
  "key9": "5MiCp2DKcwJRWxD8xvQhrKmudJZciniGHbshMWbQ6KeNp3U2KUmcscMK1cbwUunZmJUmu685g93Ts6UAgnb1iBgv",
  "key10": "2QqqLpekxYPgfPNPCFxiqFWvVQiicgqMzdD2BWmpQEJQHVjRjLzCQofwbHjtcBeWecu4ahR3jLy2UKueDLu7a6Ny",
  "key11": "3EtB8usfNZrjHJaJdCaZv7hPK9cqqAaG58wCvfhQg9DCxvDLbjvaQtgbpE4Qgb4Nqdp6aHKepFpJe1HrEbX6Yns",
  "key12": "4y2dfWTT9LCEHxfzKnUSSKdzYxxtj9ro5VrsHVCozushaQkypNxG5DusQ4PxM1cknohoi3SinMaTYc5u1LC3GSDe",
  "key13": "4VPNTg7CP3LjN1rsv7SfrK5gXibQLp8AM6biQnAqvx3iUCa8EVtRr5wGyMqGRWYD1ivgcnjTXF1f7CoeFSEKUQ7o",
  "key14": "21SQeyFAV99AkfsCtXUuyHTPxgx4swbbSgK9n9upkqng4JoEp4AQjb9uTrvHKgYQqqmZ1KRP1GoEHcPhShjJeSFs",
  "key15": "9Z88k759nhbVYtFEWZTAjyUYgPtME4retxSneg652VzLqVs76ZoJgoSREHSYuimjPHEZZrPJRDHQaYr9Q9M999y",
  "key16": "5wmpt6XxQm52ErQ5kAtm1rBqt7cjSPmVXN1EHGnSvCCGrrSDwSXMyMNJ89mfhLiJV6D5VUEZAoVXGTWpQo7CmAqs",
  "key17": "2rnWbHwa4oTW73cR3JUfRmBdfXEf26UoNvYT2nn5vg5Nb1raiCKUtxKFUYsvZMSUkLQC5ZomfA8Ss7CTZGTVSjez",
  "key18": "67c4CJTx8efxpXCdEc4SQk7CpQKcfSmjfVzHDZ5KugoNZy9zG6NcVmLz2vb9YkCRYaQUb4cukxgbUzQUajPhmSne",
  "key19": "2n6ka4LGPT7Ko9F2VoBtduJdcKcuYRx8GnXpbEuQsKnLerih8YtMia7qB9kYMhwX6g3o8eyaJgSniAqEt9qEEcRg",
  "key20": "5eETr5RrNa8G4Dta5cZeHisnU8drD6Qt77Wk3W6FtGKpNVFziL3hsYYxD45yHeiaQbVPAco2y9AkF4yjAtrYRqcm",
  "key21": "4nYTFJDwU6Xoq74m78nk28qc6jqzous6gHZExE4StqDkznDpSBh4nxtzR32cM2b4MBhAAyQrHYFwGAWbZtZ2cWsg",
  "key22": "3b4cCCGD6Hhi7nqNdzm19f2kpg2Nczxh1mmSdCEGDcayzQLsdUKE5ixrYFX5VUD5iywKkNNBEFMcRLGSiW1d2apS",
  "key23": "beyerCFGujciLJy7mHrnGEdDUgAMFmmq1kSbqEHNRPdMuQRD5uX1WnrzLqd9GFKaqeJ6gUmZ3sa62HKS5Soqf8Y",
  "key24": "59vvHJ2fPnvA4rtT9RDR88Eo1n14QSBJZBQ4uc1psBjSmNV2a3P25g1gaim42UgN82wzXVLejfp4qX8pjCiofeVW",
  "key25": "3pAXQgTdTdeTsBjF1i1TpFJoeBCw3VDAL19j2HeoZDUs6MBUpxMnaG1iaNwekqX5xtPAuwUUBQusqc1e8QqqXMou",
  "key26": "3pnsF9DcsBFNzWQGKSXZx7G1GaEK34fxriaUBFurib9UmysvfRFmBVPH6WJw7no2BRhMYmaG1wwDmtVjDny87vbE",
  "key27": "3igqceJ1V76Rd57MoDCMjRDHqxhBhJjteJoFcuYnhgm7NpqTbMhVP7YqxG9kMUxqmqyga7xMGCAyLufmHLYEUXSK",
  "key28": "2arzW4F1oqH9k8WspUucMVnvhPjFHv8EUdhUqo4o5cHbL5B7J9T4AUqJuVHdc37JEeuyzRNm6Du4sBEPp3ewH2qW",
  "key29": "oUTCXYgFXT8jzc2v8Tqr2HUnWXyHgbL119mJQ9J3HQgnWJVKJG7fBzKufTtgmjqmPBurE1eRM7hpP5hqFDy1qrQ",
  "key30": "21T7j3ug8eGBFxcstb2c64en3taPAX62BBBA8ShBmccBuPr2ar5BbEkGSGRgfxuH85Mje2SHzmYLtPswoy3AUFFD",
  "key31": "5tHLxUZTyWr8dSge6wUyHhtMaJCUx4SWznkk7vsJkU5vyxaW9ngk1jB27Ujv6zNbGwujq1FKdQoupNkFKuK42J85",
  "key32": "2adAwbE95V1Xewhp6uPX5uHv2pcY79xxSjBvAEAax6FZ81nzsiddNyfUC6hd1k33VM9dGr4shUEcwVuaYZ57EDVm",
  "key33": "4q1GXXwSx2gSXUtGDF4AZwo7YFu4KyTMmTkQkDpWSVxwfwpi79cgYo4nFv51m1jz2eXENvXiP1FEvpeL9Msq2Vst",
  "key34": "657cZWoHNr7QGoPhzBZW5KXjspLCGcsJyMbN3izEDPZqpqPDUCWokrA1SnVexJHozFiKJnJvtJqM7gr9GKFeRDVu",
  "key35": "24iTRjwjcAzQ89RQj1TGn3XHmCob13tRtbSiysc5iqVKw7PbTKa4KocRsyb9UCPKTkEYB5EEedqJxWP71UK5iXvq",
  "key36": "5rPemYioYpLgafTsXG8jFuivrbGnvPGx1deGA8kbxvRvnzVLm8ZFNEUHNUgMQ7Dj4Pa9i3E7yBfC5WFoUspDKvkn",
  "key37": "2YVctqSAEojorW9GnSyJW1Zy86hUJKkZGS4xaqF2hxZTpZUyMkd8M2phzP4PepbVBNGj3b9GW2BDyhXidUuha6wG",
  "key38": "Dxcifp3ePwBos7ENzjLWeE28tbGUkmL3qrntf7xBrE4c4TbfgsovFnB4SNi3yMgpctJQwzUWSoNTarDbfuJTZ4N",
  "key39": "2D9sj4HnzGSmwKLZ1ykmhiFRbaBRYip8wrJhASLooUvq21ZGjErvJsCcFaF4SKs5Nm45aYRK3rkhUyWauu7Y7NeX",
  "key40": "3BgeFRqA4o28rvHNmUBdhSR2ceyEPfGU5PciV23TwHpcCD4wJkpmDCUFc9Hyq4jtXJh76WNLZZBsF8rA7WRz3eDr"
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
