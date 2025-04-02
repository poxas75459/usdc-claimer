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
    "2yYsyjuUYpzMExDtNwjvNESYjpbNbgtYCKKrVAA3WigzuXK6c7KVfMhkmPko1yuPSKaT1G3t5KkNoX5n14ufwB5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzYuawZRDB6yXDRpVNY8uvhdskPY6BioQaeWFtGi7D7T9S5y4nEgYAdMdtShU9UqrED8qqD9YJtjea3CrpKj6ju",
  "key1": "4kVyjtH9gE4Y15Gg1CQBePnnv6ZJBXFCk5RighFdZUwUt2i15hzQYz2D9jGYH7zzv5DFLLXzxPXp8qERw2dSPvg9",
  "key2": "YsuqLXDk7xhK3rskexGB929nq8w8dPHkC54YtJJsxFmVp1mSye7pnBDrBctXkjCGN3kGg6pNp84ofxqzKzDAt8F",
  "key3": "5wMPxXyB7Z2JqdTe9WAebiMshD6SeDejnBagbQML96TbrsxNto9ZwsqGcHa7czvYfKXYySPDMSLj4aNhnLvtWAq1",
  "key4": "4uyktFSBZd6rccbDhjvyXm2cUexbHKT4vjJUPsJYBgamHrf9EMUh8euhkBGArjScDE8z9R8pmeFi7EocvyupEaFn",
  "key5": "4CuDXsUTskj6MXbmaeH814ysWaqPP55ghpLaK1soGkaHtDKbr8s3hK5YuywpQqRCVTAPPHxuLYR8a9xB7TXKZRjm",
  "key6": "5S1g8CnnA3oJLQEvukc5e3s5aohPn3VBEgK4UM6owhRWA87F758c8GJFxLNH2tsGWGrr7cz5fmZMiSAuG9vAEifj",
  "key7": "3tDChTzqBDX3rLv8Gq74i4QdTgCb8gCdAdDbxoXi9FzfQuLh1ebFtyzbtdEk8gNyWoXhQqzHshyNhXJQ3YtgKrNT",
  "key8": "3ZnRhkMYnqkuiXcfvC82bATdRrCou6ztCs2z7zZwcBVseJavSE5xkKYU4ZGd6s3zxvek2AS7eqMayYvNe94V1wSD",
  "key9": "54EmCagG8vWVnaXsperxB49VEJcWUtdDMqhrwA9P7ESq7Kg3M2SuB5DCaU1QKgi9RsRsvuC6x86rTaeEN7tRxpNG",
  "key10": "5LHe5V4JRVHuoQ2ZaDy1EZuQmcvDHFsecggv5aiUkqy3QvZJqqTCqRDZ5RTFZWMfo11f1isnzT9nASb7NN2Pka2j",
  "key11": "48UFoh6yp59VKNT1DFbHnCtXq1aaWmC72bgbxfpNVf8ARrteKobRganekDziewXuY23oy1SdQnG7JqtwBHAYt7q8",
  "key12": "4uBG6VTmvp9yMQ73EkSLg1QXuVfwknCRetsiZhRjiB4Rtuw1HwnKtCn8UyFhtoH5Ctf9GSJfNVE8gBpfTJKDRd8q",
  "key13": "2zEhL8vGrDFpE7otzxBbpLTABPTnMDCWycLZ5qg6Cr6w4Uae3PkqxkVPsENjLC3695k44Zb7fPHmnuzoRzusDrVw",
  "key14": "3xfEdmMWB1ViyUeMRTJfkD1Dh5vHkTL8fH8pMmczrShUL6zbs3mEz99iLujUMQxsJnUwgRdtnKaevWzRBB1vjb5n",
  "key15": "5W3zaR59ABWvy4A69r9JeHrjYvdHGSEbW86BV7z7fDknQn2B5JjinF3567adFDUQn4wzCd2eYAu6FgM2NHxz37YB",
  "key16": "4qzhra2kJaaLdkxYuPbUb5YiNMYbTqRrxNLbH6cmXxtfbz9AwJ3sRbLmNzaTxB21h16XNW9eTBjbnxTxQMrrSVtW",
  "key17": "2CWZjGnprhEXaqzPmUcfbSdy94FwgSV1cdoZFJJtHryK7HiJTmSDjpHZ3sgje6VwtqWEkYH9aLhK7RaJs3yhb3V",
  "key18": "5xfeaihp7vScBfKBxsnAU1gF24zDJRtGXZpFnqcuaTBit4A1GXrvYzZkbHy766RXnoWDe1tDy6ZYsCEVoCRc3VKB",
  "key19": "4NeCEbewMA29tNyYGdtStrFAMPFfMonSbqRtPUGq6RcA1byNQH5a3r9ubFTqnUTLXnS8WbTAhY7vzDSuauQUkprX",
  "key20": "3Y9dRHscrSLY3RvWFjv4VxxRsjyNP3BYKbutuYTN3AMMEizhgwRMTWNUYmLLiLcrAcocS4JNTSewWZqXE6vpmDbb",
  "key21": "i1qE7G7WoTHkFY6jzb6GtZrUX9662cTPAcm7vRCek3EyZxY67Ypz1Uu9VL4Bgzb1egLhQofggQWobXFrTPeGz2K",
  "key22": "4grUuLNXs2ExEzjDoge54cfxnVcj3L9gQV2W4HxCYBGBKg7bx1ZKBWLfFu8iHGnCK9eVappCK6AJVSjHMAJu9Xje",
  "key23": "2az1784VrwJ8wRAsKHVHJ8dmVC6AbCAAjm6ds58k9foUycdGCYjXiWCGzpwyXNEPsXRKye1BKQbvx2gJSz8WnWwP",
  "key24": "2FpH4AWXzbiW9WaL4pA6znVhWw3uTcAfyTePZ1kBUZtxFoGRLvocwcmaRAXmLow31NjTSrKKkN1n8RxtEppLXhpJ",
  "key25": "3XEjG86ChmTTsKnjNK83yjSPhjY4j4thKPpM7rtCxWq5sGwk4UUjvdC5YRCdK19j4JudgSP5H4JkamH7CakRRjXR",
  "key26": "3viXnL9nWL8VH7qQqntpNJEFxrLSVsNBb2mZxBj2gme2jLHM5jCjMGdtcnxotMzz8u87oSPVY8eF8Lx4MKLujPbP",
  "key27": "pXqbMZpG7A1f463x3cbCHvRKFoYnRAhsLRpUAV5gJLjy1QnnsYS1mQnzRNwtgsnMQF5UCfxN4nrmoTRYyGvQCnv",
  "key28": "54gZCVRNGdE28VM3sF6NiMioSjByA4LYzSJuMYRu7B3pfDKyZ961H7L81aZauMYwDgNo4RPsBpQXZopEKemRSePk",
  "key29": "29nPRaGPBPW6mP28rfMRNxNhFnmKC98h5Kvoog1EZUisNFPyV7vxkEWLbtfLJYQ4avFrsve7LddN9vJhedo5Qj2U",
  "key30": "3HGTKapQ1NCPUUXtKYFtVfnp1RxmD6rdTL3E9dfaqBxPvT8i92F9YZ5oNRAHCD1j3pENDTakjuEDDvCBjWm5nRCZ",
  "key31": "3qG7Pmr6CrCToZBDtvfup9EmsM4xwfwa8xLV2x6xmHcTMaQdHE8XDZfrfN3RJYysfo1HhCYiiQs2AdMDoiDAPPRo",
  "key32": "3rnR8HXYn39LabwGKCyXYU4j6cZVEy8MHQagiL53qW6iEDvZYhuHKKcNSiYGhdrL95wgy5zPVYNXHurcdxD8RC7v",
  "key33": "2Km1m1yGqyVCuG5HzVAaNV9Xc4vvotkTqNQd3EwczhPk6i2qbbC6HPWbEgQEx3ATcMZ27rd4aTpZWDZay36DRJgy",
  "key34": "4PG6ztx27ReDYzdkog272bBqvnvzTPV3jJSWBoRuBf4JTSGVdLwhfMkvwz3WwVhRuxjXfTbpf8cyDhXcStWSAXW",
  "key35": "3LayEVNzVWGQJzJhV9p8Mm6f8EwRMM2zg6sCZQLiE8LAYi6rLXNaDxNdKbJds94TgaxcWxnQYhW2y7QEuhRpWd12",
  "key36": "KyTiVY6AJg5PaFFjrHMfwg47yCNeoTzV72HM18J6DvaoHb9bXM5mCgWfWc44zBhh97vM79dvrFNsY4Apyhqa8W6",
  "key37": "2ddbRL224bwMmRoFdwHEtszF2rVUJrKiGu5oUFP6y34FTcA1FEj51oRDS2hRiuA8yuRwnGRQvUXUn15ju636Cz3M",
  "key38": "2dbX8Cr2CjzbqpeUV46YXeRLcgtA48PEAbJy2uTXhHZGLXBH2SiSjkhHoJQtSw1qtpqko37KvYAuSdaXzojiozYT",
  "key39": "2B19ZEdW41khGA4Zbi8SnyNAsCf8897wZCWJg7EHDaRPWyWeR7k7Eo92kFXFcTvw188fYuMrJdoRLgdXBGvDFNue",
  "key40": "3LrxxbjmSM6EGfa2wXvHPuqZyzi4uvARNUbBwRgdJVxvZuaxF8Q1Cb7zXvhmLPZ4j1LEffpd1PBT82Ryz3WC95Kp",
  "key41": "2pU9XRK3AVi15uaizkErx67WFzySECYsdkSMpsqDM53VCJ7WALuTe6MjinucFnRqRRSNQrP3zLwsZKq4CWzh5tUL",
  "key42": "22AQSBkuxzxvUcnfax5yWtZPF3vs6e6YhWMQFgX3qTMfFuVjDKm2dFgAdXniYTpkvmE9cSpDhogYesFJqWVRtqTp",
  "key43": "5kTachJgDk3TfRGuzAsadfDX3VotjdGYSceSEG4Zhtb3jFxNv4w1vfpwHossxYeFroPaUiCvtneP7ansyirbuc1Q"
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
