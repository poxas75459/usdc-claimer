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
    "54h4HRWpRqLRaxfsph4pfezj9vnmcFPjzwBjocLBBTT1aLEySCubMos19L9MtKtQyuXS8kGuMksXbjmx1Z4AZeHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YgKwT8Cdim6e3rbfdh8zTsotgPkPYfvwwZQ8VEgF9fhku757FcmFLaFp1pRCKQaMKNfAtVqFDJCakyZkeQNyUYS",
  "key1": "3rELNzEvbBuiPT1NHoSgFGs4ivgzJvg8CHuPChLvuTVZnBXr7gUMnB1SwJ2CUazU1RZrbg8isYpdjCqSk7dTAZew",
  "key2": "42MEg4heiYQ11Kr5KNcAyFwunF11BR3GFeib5JcidvLQEM5BNiy4iHAhkyL73SU2LfHN8FiNTV9gW4iCeXAWeNVD",
  "key3": "53MHfH3XeVdvXbL9sb1onjc3LQz5m7wAhxJfz69xxqecUFStYiCEXyMh1fJR6V7S8FE7KQPhTbrGvgQyXQxUYpFH",
  "key4": "RM5T2JJt2q7UJYFe5LYr1oA2RiEL2KJYkefyx4HCRyBSNdWXRHRHJcP7rXqJ6PgD8wo75xEdtgoCtyf7FXxsi4m",
  "key5": "3tLrDoTWNmtQ8r9V2qU6TxBXjFG9ufRSJ1Kreda3YrJEzSG6iTSBLy1aFjpwL1p2nbKcWodxc5EmU57jyqAatvfA",
  "key6": "pmsoArreitPTvkEvhC7qa7ieLEx7bFN899xGetQXfJuYfuDmKsqZ4Wu9ZKGeUe1yWutTLhvrmrFU7SqJijx1DN7",
  "key7": "5KAbSFLymPGMvHp1G2NRdFVQwtjEMveNtTpCF5eiuCv8SYs67uSLMQ9h7bZ1GZjvzpPJEB2v7zDAuDrxjn56E4X3",
  "key8": "55cUmefsfP89Q6PFu5pqnWDBNDTmJYS87cWrzWdWskDZBCPm1vXsLmTjc8sT3jXpNMzkrCd9kWo9zHKGFNn3LpS5",
  "key9": "4S9rAoUNK4eqiChf6UgxPVS6ahz6nX2drTK4eWzMttgjiVb5WyvKufwXRb7uTbNb8uky1ZkziyMAn3B9G9k3zWdp",
  "key10": "2NeYdpTkSp3pg5YEVNb8LtJ8z6GjYknBK5f3TkL9B1pqzSK8Wd6YZGHYTdDMKYUFtvc5itVdbUPEBvCnMwuG2osE",
  "key11": "21tdGVtX3o8VudsqGaFabTVSVZHJx6raL4ZFvAxXot6bMK9W6swRLhpCQdU2W6FNokQs8K811gwe2h4pKDXdHW6J",
  "key12": "537KBkqjsKc1yV4SLuDkqht8Kh8apM76E8iZY5ZXyoSihV4epCULufBjSRebLcozQWqwp67x8vodn2ghPUd4aRJ7",
  "key13": "3WKAsafndnrG39KSAXqFkLGCr2bi3bU5kfZdFnGhjhgwMqnjqX4i5vVcvRyRqCs5WEudzG5CXB1Tgd5TU4uYbd9",
  "key14": "3CJiNJXb9Ej2urXkg6tvvbfm5eyb4qiaN4dDSS3LbsTwRLsTUmSNVWfmK7LcD3QRfDYAwutLCYD2y1F4iNHgcF2t",
  "key15": "41Y59dRVmEAWGsVsZqD3U3WP3E7cJuJBcA9BBzAuLFaukHMibbVfiKksgRfN6z76CkKDQqubz89XMsB2RWjRXG4a",
  "key16": "5ChJQVTpfAksG3dz5rXo2nkjRkMZnpvXdJazRMrLL7kb2ispt2tFoHgbYNzSkS8nFNzmGppiuSoNC5Ago8AS2onB",
  "key17": "65MUo2AsiFCnK1sRQUfUKRfoSiJkxTGDyjr5nTbB8icPjNeyyA1ZoMBVzXYsJvDpxptgTBHH38d4nnxGNXVf5tzU",
  "key18": "bDSmJU6wBh49EX6gLwy2Jo7FvDEcikQvwCWjh4dQFw4hiHFeL5iJeybH9g47yF8hqqBHVJwN7tfSLri6vgcp4XM",
  "key19": "39xQQdio4fxoLG4pmx3ga39WTvAUW8daMGsM7ERUJf7MbRk472kK1vJA6VP8T4DyYdiA9Zs5sE573F4MRZHAh78p",
  "key20": "5dmNQ5eReeweD8EHGLBa7d1zautXb4mSVYeJo32gzEpedb38HhsYzabJoExUstuGPSdUsXQAHbBvNdt4GTdrbUdH",
  "key21": "5UXGyz9Ta5jnqnBZbYiokci5b59yXRUPtEEcQehH72xtkEiJrr47YjYLdbhQosduEEnoR2ngZJ1PUrRUMxciJmyR",
  "key22": "2ZJbhsUL754PtukYmfWAaPtJxSL5kHntCfntinyX3fbndSEiLqmKg19R5mGfcGJW3GqfqgGjsGLeXqJH8rtzjsVg",
  "key23": "59j643rWsqDTaYhmp8czNrJxb4sZDe25huMo6HC9Rgm8nd1qcLyiso9SF3h7iGdFgXVqgReuZkbaVBAw9vxg5kZ",
  "key24": "5WWfQsna2ZnCCrpkU83EyduLamyafXgis8NqpwCcWeJbBAJ4mSuEFC9zqw8PP6Z8y4oQEXpa76zvRK7gRGb6oiX8",
  "key25": "3F3xDHtPZiyLVWZ166CraeNPkQHScdRouXvhUoTvHcjQu8uPa5uipnUwZ3nMBJ8p21o6X2dzbU6BFaLFc6wJe99u",
  "key26": "JvresArzkBnbLUvy9u6T1ziqHt11SdjMdSv4DPVJr5CpzaURZiCRYGMrTwbbSjKUEzUsJy2ZcnA2XUz1ozMqRsY",
  "key27": "5xyjty3ZEFYtwEZEsvNneGgAQAsWT33cm9vCfhtM3ai8JnBB2R4eu9bRb7jLdjER1h5JNYdrxC7KAzoAwcRWwpss",
  "key28": "5U9C1zdbb2AnL7XfnimQns3w9u3JjCosuhCTaq8A2Jbuo6RB3RxRW4J3q3zorj9f2d9cACqc7epYcQ3LsmWZkxew",
  "key29": "3wv1mWXmLrhJjJxYeZGtAcM4zceojK3AV8TRbKMg2Sy4sm6u5A65u28H2zWvyj6cesiWYVpFGpy5oBL1KdTCSYAV",
  "key30": "4mCa4ZHGQA3W1KnFpkLskqYD8iZT3QgYezoXSf2pWVkqG5ySZWEfJM5MAt64NFfeUehgvKWbV4QM5UM8mhiKve6h",
  "key31": "kr9ey3QxamFrMfjESFmv3v78ZGopyzSTyY5jaCknaZmeQduxhbKnwZQfB5EZYGZeSdBo7rCreJmgGFUiSmo7oJV",
  "key32": "2eVvMHpELoURQvbncSam9y5f9wUTn4fSfogT5nspMFFTAkuqxUpdfqJ8KNytKwRcZVzExNn4Uf26WmBrFPGEmqnU",
  "key33": "5PMhVEDj8EcretR8ThbGDeaM2qr5vmUxvVaVPgz1obWzt7ci933irqoFXx9DNmEY9PqN3Yi3tYN7L6VFqAWCN6G4",
  "key34": "3HM2g8g3hcopGmv8NydVvdrw1cg6dLPcd5jSiBzWmxotxCCem5Ye5SKahMwPPKNcZDosrXDiRnihf8bbxFWSpx2o",
  "key35": "5EFu6rtc31iigdk8oJUgSqi6xdxzDzzgKgA2Dkb6CJubeNvfmX77H5ZYhP4SsMrh8LsNyYumELXRA2iJiqeqyNQ8",
  "key36": "3j9FZWX2wTwDfmWfxW1VbiGH6VfcceUBQpQi6GMBuYndCMqvoyUSth5HzyZGaLvhsP1ECPHKo3jSSmu6cnYcaNVt",
  "key37": "5TuBzLtv4rZvnFghrmksQhp9VAZSW8tCKB8L7vr664Bbby7cfoE74dtY2KsHLQcUmr51u82itHmfEdJxTmPeqrY",
  "key38": "35QLJkNgw1p7CDWFBYCcjG5pXs7M7bCWPZzdZxB6TMXSnQydLiexpKXu4HuQ33iEiNLUDdcByFPE5kQdvp8jcWq3",
  "key39": "2d14kL7JUgSTbnnL7GecW96Yg7xGi2wH3nggMuyoxnUTmvB4u9tLpXpNFXfiwZ4XLoecWU4Pdgh9dJPu7FeU7Bof",
  "key40": "e8PQtCWciAPFBGf3NcUXJ3cJ8XDpD9SyABD6KeFCvfcGscyNjpk7nx3PWZBmAEy37iyvJCXtHrob9yZokddiMAB",
  "key41": "KfgYpcxD4T5jwq33TLrysggnkQ8h3AnQTqnZsvP5rvzsYyvDDVk1RUNxJ58uPFsbADUuZzX6BmdMTGfTXho5Zh7",
  "key42": "EqDKwdbYhMtreQCZaQKsrqdSydNSXQ9b3QaXoo4vtSrcqHMqdKmkotkLQHA7XtPMzF4xWLNPHCgR66qoJHAj7jN",
  "key43": "FoY7PaMJPZyGRG18oR77mQLbXJ75rrEd2XvUx2n6ZJvD43zqfShpfihmtfK5r3vJEitDVuhsy3yorDyFbeaU52c"
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
