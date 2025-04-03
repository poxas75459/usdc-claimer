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
    "3B1B6c2LDKiwa1AZwcpDnfqrHwFDgxSJtPF55bwyuiuoogno4ZHWuhB2srZpfp5oBrn4HvmR9Eg6JC5b9vjnpmsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451PSsYXkgTUJ5JjCS8HpZD1gZiRdJNmCJzgqpYtrv6RCd7ZbL26NWczujrHa9X6NJtxfLCXQJn47meokYQmsY6Y",
  "key1": "kbPw7Gq8bvvHQYpxGyaPWijoejn4Wtf1G6P3YAy4ehJGKrFXDxZpFRSQ5WZzxRNLUEEbAsBCrazFKfyo6Xfh6f7",
  "key2": "5gvzwXUPLqC357ijEe1JdstpLe5dwJUdu6UyKNS1jqmX5FFdsccMuGr5ZK1UMDf5Mvh8z9AGeH2kTvzEnbunscju",
  "key3": "5LknYa62LRLDpCSQoBRvYY34WTcRkEcxzBfojZ2igofH5EczT7vSWDYCADEXi9NKEwQ26fL6S2dT3rjNsPNzSxyG",
  "key4": "jH5ofzGrYPMpXMDDRvmpshPkKBncD1BnguVV353HsujRXxNY68RkCXntB9tWUZ5GHdq9ecccA1uRXdZDbHzhmH6",
  "key5": "38yMWqneVL2bVU4Vm5jtrrh3PN7zZJEwCmaQLYHuM7i3n7hh6JqpwtmtMtEpqUmfZw8abSeeWuUCLwpQLVh1qLkc",
  "key6": "5AuCadGjRTkfgzQ5UcDf8xzhLAR5bMPjmYdwQPy46nQzqCBhwHXevnHCRpfwxTULbG66UHAwvfWyCTSwwuxTLzRF",
  "key7": "29dptwQaxSbJtLmCXxjn2efQB4wktBW1P1ApqPeYhsyFFxgoKZWoF2ssoUQJewXGsWJoBe1ariXExf3MeZFk5RBh",
  "key8": "cQPpE4GrZe4GLChLRQrt3YkLS9B2s4E5U5z6NkHTUUcBJBqvq6keYpY5GkyyhuguHtZBAuPw4HDkxNHVa6918RS",
  "key9": "2FUbJtE3iy6w3WuQAGPfd95u4gK1P1DyBgyPSraTyoaTChr19oKRj9fYk8ACS35W5n6ZqvcJVY4P3xH5BKVHqU9S",
  "key10": "2ar8GiJpsDzKDWFMwfngbgqK8o37L99TNxeQN4sNcYTrhoyZJdEaJa4ox1U3tBpZCN61XiE1X8baKcCMXggdYGHB",
  "key11": "4LQkXKc4p9KRE2ATB3dM3hxTkLPL6MpvcS48VpHi7Y2kSQQojUUxPwMSZEH5zTcBm7Cr5jr25f68NSrm7RsMYVRV",
  "key12": "5NhHASAQbrBGnKyXK3iu243fGq2ofKyCEzSDjvPkR7U4aJpXchxb1AxHv8FjcJXnvZfE32JokUnZsvNc6fVvB5Sa",
  "key13": "4LmyhofTNtPyM7SY2EAYpt3exJ2e6LEWcWzYV75d2G9WozUsnzsAk7yzXtKvCbyNu5xWFVZ44CT8usBHJdgxhEVW",
  "key14": "3FBJhJQ3JTNpN5Wfw7TDom8oyM5XtkpPHTsSW6GZKBjmBb1rS3zqvDH8N5W2AGWx8k8UtX3FegE9HKkDJUyVqfBS",
  "key15": "5DAor1u7qeW4DzLniF1hDp5Sqs7QovyvUV72CPd8WKU6sueo8g2RTGTpD3ojHzp9f9TBgPXyaZWodyZTknCawn37",
  "key16": "4wwoEGkNTQCcVRvHarUBd6aXdy6QkLMtvCHwuWrf42oH96qjr7sHWdCvRqHaYMs49tf1p4sUYnyjBzZTQjck2bue",
  "key17": "5xECqwuZniXgdV3jM4N12Y4Gmm5WZzbd8ScLPBQB2bj9jNQrBQDviScCrwZQmNuUJ1VnfC2c9P33WJwgpN8Tpsgw",
  "key18": "4xFWgS6mv6dYMZDMPRcNb4gzsbRXT5M6eCqbBiF4zPV1z4fntBNjRmToUWAnd7d42jaUme9qz4oAwbaRepyEXafY",
  "key19": "4XkGLPKJS2S3Tm28CujzNTLJVfzdw1rdkyXrCmMoY2V3ZUEiw9veXY98Y52EAABQz8tx7ehmNy6T7NiSer9qeuy4",
  "key20": "5kaiQiyuW5yTBwx6rC5U21SvXsHtc9kE62bCysP2pgQSXbgLFNLTzfD67p1y1uUTVBhVtSNexxqV9tYx5sy6wzMq",
  "key21": "vAqpygXRMiGuRvfNTR9jSSyfALwyV9c7HvLo7KpMosfAGx8TFiUXzWpUgwU1FXec8NLw4AP4BAqq566ZGRwCWNQ",
  "key22": "2dmEq9tLr52XFk9HnX7XfmFLdNbTYJWFDoXqvcffd6vEk3ZHgrLdrMWsqsEdSuYzE8fCQ76T8BroSsQ73VXaFBoM",
  "key23": "4tgP3sJLXTtaThRHAHztwpWHC3TbJyimV5XQPh7U8gozLth1ap93wkeDKWAfd9qo8jHJ9wvGnAbWvpdtkPETHMF9",
  "key24": "2bjFnEn5jBHyuAvpM1moBJRwJJj5yR7VDaDvXhfSVewjGmuvX1YSLy76kh9YjszmpSK7d1Bv4RrHitX3JSy3viKK",
  "key25": "C1UeGUPe9aZQ3D7fPteyvEv8WVTUPGX8hmworn9EECKthDyWR6Ut3jkWZVA9R9272JDiScg8391Rw4yRwpWjo19",
  "key26": "To3Urk2WY7NtsGL5wrKBDk8GWRVpSQxAZyCPSiobdwsFDn1zmiSmqrTNR15byzkBXHCv64M9sShnJCuMugDChhj",
  "key27": "6N3uJF1TFPKtKLmwhVLhxmJnnZnKdNmpfeSkH3j3auHYZGmv5VyvZT8grpecUzG5vBWaSrwBscX4B8nGJ8WTSd3",
  "key28": "3ULCiLKtw1J7DVDoYhj6uHWkmytHsJEG7hKBMA1VHBbiC3TK3uPSFoM9JAXkZGSjtcjTydYgLkhibvrADRim6Mjt",
  "key29": "4KVCU6hvpd52965rSc2N67eywk2DRt9hqoh27TTNui9MjcWShWuAPkRux5GguG7kxQ3em3ZSBV4GSgKfz4KrsdHE",
  "key30": "4Gr4WjM85PciALfT47183xh9h6N2UA5EwAk7yM5H7FNW4VnadyZAbqmP6ZGQZWBHVyaAPaJgVA2t6u8XQ55DQyjq",
  "key31": "3tUXBLVcBak2qDKr4uBsJMnbmKsr97VUSCJT5Xoz4jtPoATCj4NorLVMLD2ERFUo9GBrCKtZmiAatCSFSaS719T1",
  "key32": "3CeoDRKXfH45mrUAke2x3qJgdhw7sST1EiLC9rcMGtQW7hwxfgYQsuyPChNrc8VT2tY77WhbGtmxxX6m87a17htE",
  "key33": "2fFMHFF6WAfC5S8YmKfdKCcqomLxb2VZi1SY1EXQ8aXmeixVNRLR5v5ccxaqB7D27dLvjcbbk8nTiCRjrd4V613z",
  "key34": "2MDvBjJDmjVqb3JEgAzzVonssPFjvR1iFtow29KJ4BodxX9UQyvBH7dRZJ9UvFqvcGSUXp62xXEWCFiqp4oGxWX3",
  "key35": "XrMsm2WG3mm3RNFAZ1djXbskDa3wVRoxwU8ekmNujRoSmjrRKvJNcAJKnkKfERk8ehhm1SMnVEwauHfyJaytBpF",
  "key36": "3BVdj9dCSQ12xVNSn9xnxvF7uzJxeTS1SXjRZjHUA3dZv3cLHksdkhKD8QzYQwhx7dHXpbY8ML3NbsMrRwNFVSec",
  "key37": "3BWHwBStLHVt9qmFzLkhs4dbcJJkVgfAaZpg51dPaesEuHQBEP3nCm8P1MejDpNmqTWoRSx46v6cLgk1aDaiEmxp",
  "key38": "4FxkfNBawE33pbm7t5T8M9JaF9KC651obze7otHxV8t6bvdKnuV79EAzVopMfL6sgMfFK54zEaC8FsP33gVibWxP",
  "key39": "4wx7UXDwrsiBXYCjtefPHiyQo6GYS57BuSxkLsdJ6o3jCUKJCM3CYzQS98YYrkVxL8tD4maY5p4p9MT715UC6dnh",
  "key40": "3EKKd7gkLs2B1bPrzxTv8eQzY6Shzz6KDWYs7JvRvWtgyiDtzNiPsRMeDQbbpKFQEniD4SxgY6K1rsyvpQQKEtLb",
  "key41": "3ut9z4LFdsygvgdEbYm8fWAUssYHnwPtusaay857gAKFLoiJEYw4sjHZsGXZmvbeyeG2gvpQr2cEhqdp2eE1k2u5",
  "key42": "2WwTP8mF8fAxRUWme5NBynpLkGYmB9e6ZrdpfHdaV6rP77EL2BtoUE9kbNxk6bm5cZsDdu26KPb3vGwPBD8CvDrV",
  "key43": "3Vk8rzxSBmQ26XRQg633nAjoWr3fzfnNKDNbeZdePsqF5a7JKkgKLwvTrNrDN34Bz2vifEkpj9yCmE7qYeSuNwq8",
  "key44": "xNcNYGqxiogVPVatrNvQsAMbNA57ypfWaNxgMZZ6ZtdeoJCxG52KtEbfG5MFpWF8PV415xQctw8yzKFPHCKmR9V",
  "key45": "Mrzv75YMkYjJ8CeqvMpuVhtdZ3jbxtGG75CgGiR4xM6mE2Qbs4hhu6PhMThg3ktm5pXczMSwtLe9o4hGNnoUYi8"
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
