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
    "M8vzvbzxae4LNxbK4eTT7JRVmzdUUQc2USCx3J1zYS7YbU5qNApLzmVmbbNLPu6eq2jPEXuFD9Qd7JHfzkD5jPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oriPRev3GzGasxUwH35yDHVnh2zDRjUEEZe8sHuDmJLQAcpytHqU3etnQnvWz8s6t4LkJ9kxEjjFHuoDvmUEzTP",
  "key1": "5incmkq9qVGxaEWoqexGjDdNFrzd3qyqfn9V6LXUpBeMFXde81fALWR4yERmRA7gWWi4SXzy3FNXf4HgvTizbMjB",
  "key2": "3zsjXxJiXJSvuvDqBGGYquYbggoNrcYs3wgKnYzMJC4BachbegyT5pabqAUNZVoCkPRRiw4dcgM2iA8NqQyj21Wo",
  "key3": "4Nmp1NjFxXW9kQqDnzaxQ1MDnRGEwsBkmN13tw7Niz1wLxi7bn9v8S7QoEdvYUsENrVSGcPsLSHUYDzMAg1uj5eN",
  "key4": "3uxnXZcdk6xkiL8AUhF1wk2qaMQMaAMEYvgMKU7q9DCd2pfa7jJmcMjHdTrjj3S4WNefXLNjgemhoBytxdCRQC2o",
  "key5": "xMZ3cCwPpr3ZLuzVernSiX6cvdadijKPduPkTAjjYG3KvyxQdpgT5ZvC8jBSzCT7S4NL8z1bxwaKAZ7eDbYjJLZ",
  "key6": "JcAzjaqzsfWvyBFsur8ZQbcn1WiDB6dgx6xsq8bnE63QnJr9hsHRqpAWy4VYEtGBr7HUmxZRh9CEnYo3abzjSPT",
  "key7": "3e58snuQoxFXFGH77kKXDntXmBYCWNMG2VvXmv4hoSJXkVCv9nBtCEdATJmd1RdbWovfaBe5Vp24jzm2ftGQW1hQ",
  "key8": "cqKhcbzfiUWffcVSsPxwVyRcjNrLcdZnemsoSaEp7WpfgvPnAzKPAmnxnVcXkntHsLrYv6RbTPwRMccAQCYiiUz",
  "key9": "2i1ZmDKMR9XHqd4ZRG6txFozFqK5J8a9kG8ogE7dEK6q96Q2uVWPC3XRLb2FyGzBncxcDmuoe6TwmDgB2SuS6ifG",
  "key10": "6eS1iETbiW7H4HyQbLjkr4EcCFYSa3X6PbvYwC6LtKLdfvG1NGY7yaeVKjUCDMT7KmTHUPfVzZvCaECZ4dS63Kw",
  "key11": "3waSZ3qNDRCcwENZFWMSUv3x2PezC9Kpqaq4PXJ1MaXSYzisxF2GRaof2nEkbsp736oaSqV8uBUCviKrUmbv4Mz8",
  "key12": "4jEXSVivmWfs2FjHdeHRy8rdgsY3wxhix5Ve84rZTgMpunYp3p9oVnG1NqGndUf1tjMVsHCbMnFUR7tk4MdY2E7n",
  "key13": "5vx6nmusgC4HDFNF4GAV4nqtNGkvfypGmtXTej4HFJAKddqmC4ATN8CceATdDisYwuyovDeXNDCnKX5kPCeNaL87",
  "key14": "2S6qBmA3dT4aMsaAgggSmLwxqK1aVoJyaZvskAad499Eqf5R57oL5eJH3VH3TPr3q47yL4aeCSigx1v7LJD5XtKS",
  "key15": "mWtqVzDWujw8SRx5xQ6HLtB7zs6KYr9zjjgE2LjoGUW89XuM5K3utdJgoAKBZWdeSEPGXtwyiL2q3VwJie2X6CJ",
  "key16": "4XgExB1uC8woLLe68NNUDwQQSrz2ckGcMeekqLdX5oVRp9GVLKfhSnGQoxnBF6Ni7Y3kWXPVaK7LJxCaicFZbMtL",
  "key17": "BBQ1Ex3KfhnBMtnU3LeNSFXVoVJAMCr6UzdwxuLdtWmiBFFBRKJUCMwWS3FYRgWyYFnRLgtc9afcUp6Kju7vd4G",
  "key18": "2SvZmCSPFwMUu3BmWKRdH8HG3eA4RkNX6cHqjHS49ZGKJh1MVTwpR77GisditqwtfoHef1igAtkc4p9fqydvUTPe",
  "key19": "4YLBgv83aWFd4b1kGM9cmqy55outrmbSGa7HGvtH6noHV4Qp1FBKe6nF2NrX4wX3e4i6KWG3MFoKuapRtGFHRnbN",
  "key20": "3kdQDQERRrD8mTFYSsMh9kAWyipJv7DQrWAvcfLtbS658Re8pNLJEPbpnP76M4BYeHXFtmr9guSPJH5hW37Vpdd9",
  "key21": "5rBikpC9tCzvf5XKbFqj2ZoBT1GsT8zih7hKM24QwZ6bhL82vQexoGRBRT6hCcm15nMsn67DhknmM58F5X7FLcUF",
  "key22": "63RLixTCjFqyxAkqiJ5q8EYH5evXsrNSMRh1scXiC576b7GBuoTSEzue5BQUxTBBCC66PjS9xPn3Yps8adxcbxiN",
  "key23": "5mHdhTbApmLbxVtirejCaRPCsnT8XKEvjLTsr1Nyu2MMMQcCVkbtn3Sp8pdSuoKBvQ79kosC3tbUWcmx2quLu72r",
  "key24": "nGECcTa92Zuqg98Sf7iQ5rwNpv9X486NLDW1G9u71R9C1chh4ogQmouQDYnm3DHbX3DJ7QyDJJugfKWSjcCFRAX",
  "key25": "5ejTG7KpZZPGHcJg8uecMbd5wBitncQqjNkxCBXzVwNeSptrNQhRNJq5KBVgZsq7MijrZNZyqPLUY8sWqszrt29K",
  "key26": "5T8Koc9M13uhJt6zAhBwsXwGQniBz4j8e6d67ujqGKEewg82fD8siVPpaTkvNNHn3XybGiei7KrQUBGwtVF3wf7s",
  "key27": "2SY5RRcm7uWZMURayAibMrk55FoxVQxN53M1ycUGDaVMoaqR34VC2RnzappwVkV6iXQgN9LtB23zd2egF842xc1z",
  "key28": "4WUxGsq2Bka2AVBvE8EjUUKcrTWxCrJ5HDfBPVRw9WTSpRptjQ42B9BAhHqpr5NerGZNGi9SrLZ4qbkRX6tAFv3s",
  "key29": "43JnJG2d5sYkDVmYYkeytFSVnjEtpw1BWiSuFXpbKcQzUhh4hZRyWPMKwmFebGu2ttf8AxjS9WMW9kMoEwutoa25",
  "key30": "62grQ3bgEGyWDZbFDo5RWtADQ5xntcKEkqzmMnJuNv7dVaBHS3pD8r2oLQUhkEJyhr7CxCmmXaDMZRk61Eb5ZxWh",
  "key31": "4WLBoa2ovMzJTsCojt85wGvdCDUWk7Fr7e3V5C2AJ1RUMqVvWyu55zj7tvxVkyib2oKh3wrJj4Z4Ma5XeTS8hdow",
  "key32": "2fPUbZGhV6CHythpfw2EWiHBA8QzahCnrrJXpXGmQLKARyAtLj46GkwZVaXtcNkhFwNhGycUY3zoJ5REjFmUzN1E",
  "key33": "47PRc4N8knenjaHiUjTv2nY29jDh86kE4otg9kstCtvd9itaBM5cJTk8reEg2CU1ePyaauPAnDdrZk5k96xLtk88",
  "key34": "u1GBMmLKJPiWvGhNrdG6MXqBQQXdtK399Q2Hursf1u3pmnGDK4PRnCQ9xWV7LsB8YNWWaFQLAM9u7cThsnHGJps",
  "key35": "5zzcENfvV3yv3Gxayt84FRaBEWCoDqTPkey4gJKZvibmfw8FJoefCYzDhUo3uTgJ1hQarbRoRBqYvQ2YjNkhb2Z6",
  "key36": "i7pqGFxqLtzgBbW5ejXikUXdB5s7w9itRh7yNKZKdS1ntnzaivmccEPvLUtqDv4RiCRAkBNrZsgi6hRzT82jcn4",
  "key37": "2RNGoaEj4Ljn7PwxHMbJQhgJDTGSqos6ddgETkmFBKHPYAJenzLDatSvuBi85aAXf9VgEXByQKNoAeNvVMrUVD5t",
  "key38": "3S5i9ma1WUvB1PkPwo8Un9vGciTpCeDFrnrD6hCsnqMRm6TziwXLqZqxvmhhUeG5wmrZgViMTuPt9ecQvwtme12u",
  "key39": "3oTY37poupg5brD3w2gEg1zSxJS5imXfsKoAqrSkGecF9Km1Wk4uQmuoiaGmTWLbzhU6x3gY7ZesEf626ZXZQbp",
  "key40": "4BcXAtC8FQUEmYWUrBF62dW5JDqFpcA3hVdfVeST2nVF5a2pDXTVPo6PGyfw5Z5wwraSQc3J3aXAegQ47rQw6Hii",
  "key41": "hTgzsZoxSy6YYYsCmMPAH1CpRqYCFtqYksoNCL3Bo4cmArYiuc5JXooduzpSPFD1DqAqEND4w8k37DNtU12ibc8",
  "key42": "57iq7rKCpAhLZjTF3yX53fE2aKSnBjyrWon7uEJ9wYdpNKhzeBVDU9eqUNB6ueJQ2nLBqeKk5RBKxWyKkF7USjHM",
  "key43": "3sShhihNktnXHzyqdcnkYAKLoyJnbW7oMzavtucr7vBAVs9EPQXDhmpiUu8wn1eMMiZ5psMVEfkr2vR2ciTAfyoP",
  "key44": "3fugigtm36ctq6tSXhFS2XKvakhzkqriEm87dRMTjJHgS81bgxDymYnbrkBivr6akeQxJq8Qs5ks9QvUZ7Kupjn9",
  "key45": "4Yy1Nds8he2XG2UgzEFHEHmFiZNK4xzkJxAT1NKzMovVnoF2RMaJKLiMTUrXsPFXPgBGgjaEy9WgWeZ1qZ4V6bkF",
  "key46": "3eAKnHmPGy6hbeZajWsWKBfP7qwaeEj5VhCdEF94v6So7xMCacmXHUeDiN7GGEJqSDqmnAhDoMn6buqSZywmaGkq",
  "key47": "2yR96ECvSPcH5euQXbGFGgYBbfR3MD74F3C2A2it6S4qMg6QJeZLrmSeiPBbAXyaVQxdm6HQmynCnZajSfhNxDKT",
  "key48": "ewyhoMzZr6HM2JFBPhij2bC8spzzyYefq3u8KboSepwR3TgSLSodbP465omKZAa5uSa7RCFkgea42QcEViDq2MR",
  "key49": "ZXTns3SoWUpQz34vdY3cVdXVwxS16TZzRyV2dXzJ1oapisQMnfWGfsnU4QNFoj4ifNDZthZgVTAhESb34QgwZkD"
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
