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
    "2XuDsnkRmM2NUaRAMUfwRGoKiw6euHYQiHPd19MzcbbuJWwTLDAx4uNj6irqKWrPYhz78Wm3CUBbfoFy6AT86RiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDFqceBGvwQMnEa3aPMivF42GsoSqJqXodgxVcZxCtsyzy12ir9Cw3ivc62MNRjmuerSwCdiNErAwWDcqxDmyGw",
  "key1": "5fz5auTBkxR9ccpQFj8f3ZSs3tNCZ3Qb4poHmD5GcEifP9B9qgFz4o7QskQmfYDF8mSnhsFLMkpkPfWm96MSFR4V",
  "key2": "5KmgKBudfD1WS8LW4yrbjxBZZoFQHDuYVUkyBRHGESu7zLcjX1mjyFiTXPWDPiNaPa5BHonSWfohRU7emssNaTSJ",
  "key3": "1G9kjPvjw5ZP2VuzEmvNybELWrESk7vj5M2QmLesW81vdyTdA2j7gAQosYKFaZjBejaJiVwgjDSi637eArFyxFx",
  "key4": "5mBBbcUza54pV4iURBsCN4um7yHiXg1GoC6gEie2rcFegRGcDB5k2uhaMktxTgbXyZwRpmDb3rVjXCM1Z3yzNxfH",
  "key5": "46XtBfGQgZ3QXmDkL54Nrp5YXBfkBavZCCzrTtSisRoNFVasgWo24QE3ujMQnDQeU25H3cBFBpygi7roYD8CGR2w",
  "key6": "2vYGxQRXqFUQqRd2Ykske42VCfEKcFbiFooLa3J6BZsrLLrAdMwX3Pd4ncSaMaSijFRQbi6dV4QuKjY4ASqoaezC",
  "key7": "5TYPMLyBSyBrKmGHYb5a8emsmWcDm5Kkb2s8wU1Can3a9r2cAsiteVqCMi4fRonqaUX1ydUTKRBhLrBdUknWaxGp",
  "key8": "5NRrSd7LCTdnsWCyvsfAoyJV16kRwdBZKwzQt31EM4JngzwXVWBbrGL6YQa2VBzAVbV9gndKq5oEtgt8Uo7du4iZ",
  "key9": "4SPB16RXyGwUtTPABgNx8voD5ssLHPBhTDEPCwJ7gjVokfEBrgMiPCJEApGgagMnt7zw2kb62ytcz3SeBsTwtuKw",
  "key10": "6QGRRtdZY6Ko93gvRkdNkfmER3QqC9gfawZEH9LRwU4G42CaTHATMZ9JKA2v1q42H6HGtdKuB7BWyVymxf5oAJb",
  "key11": "yhECJoZYbttnHCFp18imG9oeaemJB84LwUBChzQFNnnVpmD7bwjshiK8ndjTJFRvhsoMY7YUqvbzyAqWhvjN1uz",
  "key12": "YVZ7PuEEs2j41QQuiLzEc9GRPG8jGuN4NrFb5oPQqfjX7BMxKZA6ta2cbtiUep4UTr7iUr7DgKtTP8G5jAeMceK",
  "key13": "QVrYt8Mjz2FNTG4fPF3gNcQhkjWfdgtxTNiZci2EjaeEU1pJR3R9NT6EXPx1dNNu3hi4c5RtXieVzqYAk45FgzT",
  "key14": "3KgFi3E7jiX1Asud2j1JYwmqut3RFthsFWLou664M4VHgqRgop3z2ZPANicFxmJnCiz8bCMas19GthDmhJRq8uPc",
  "key15": "3hBWqqd3a9dpD9H8meaiPFgTtRun3esxJj6bxinYE4TQxf1MMHxeXEChv4crAcNFFNQxwPP5oj1539m3ts91g3TB",
  "key16": "yEKQhtPDjsaH6A5Fr3ibnwcoLisKTYzBTsrVb8vmr7dxasLxMAQWZCLNUwc75UzKv4S3qUH66smAErZgxcSBYPJ",
  "key17": "bRhqX6GCnEw2Pi6WEtxicNLWLK4CGsS3N7Zej6YqxN5DcutaBbc8JjQ1fNiQR5hqm7fBQJKnioW7wki6YMLkPYF",
  "key18": "C1ddrTELMxzi5YVc7XiMPvb9CnUunqtzFAZJZvQkGFyWAr68j4RLxeoqRFaPwdECnB3XbN51HZRqZkmbfkWRQPS",
  "key19": "5X2XG3qp9dgr5EMEAZcNp4nKcxnMWMvTVmDP4MBnxSvjrbDcRZho2cCGPQ4Ais32dkuaGPu8JCa14EjvvB88kERe",
  "key20": "2EumZLm2xE5XF356REyv5rXmAyrozMKkbr4Hjf5yapkydkBQjGckJqaCoV8tFNnqD5WiNz7kbvvWmvgdRLNdUcm9",
  "key21": "5r3BR9AVM6ih1MfeP6vu8byHK9x3es5AzzYKag6nJC76jqzbmcgaW3FnXFvAgVyLvD7FVJRQtaLS6kBPZWsh8Un5",
  "key22": "5fStMeYyQWFjsSygorhCvCpC5Anb6BsV53mtJxqN6zofXRDPFDyPyAxi7KdTZJPFxyPe2q16hg54QdTm4iQDxoHS",
  "key23": "2ghSYEoEXtERWR8qsVSfPATDz9k7gNzqFxaGAmaCQuffT8DSjk9rtaeqWxLQwvNtgpDvEE5D4osRpAx93cCThAoT",
  "key24": "41KTs1g2o15ens9zZHaxkaRBZpCvYY7V58spvuqQ84wS1Jh7gZuchpjC8TqfagNpzk6jSNp8hYP9urxmZvK8xvJo",
  "key25": "4pKmHc3RuW71nSFhcFTP5ZHQJSEatgpHWMVXoDhpFoN2ifMAddoqB6htGNL98Ptg3UXwuTHgARn3DNmYKbwSyfTg",
  "key26": "5AiGY122dqfbuNzhT3BDnfYJ1aEXqqcgMSFFnwFwF3D16WW1B9dY9dH11kZrJEdZC1D2DpgLDmGHVdsJtKsyDf6b",
  "key27": "3YSmxxY4V4NUfZc4kdrCmpf46YnFHMpWZxq8MT9Xjq4sC4PfzStYtzdgriLcSCinyxAs9mtPFEQoQwu5zP3M6GQR",
  "key28": "3hAfiaVmUaC3hf69AC1G5TL7drJs6f73gfYfgrNqywPnDfqNvzFrudN3FsHGatQh5qsSCqLNGy7WEDXmGh6bmfyg",
  "key29": "22cTSAqt4ba6Dou8ydpVeCyJPe7j8FNtoudPht515k7LyWno1GuvKqwzkFb61iWUR78BBsPHBLKQSQvHJBsdhHgo",
  "key30": "5zZ1umoP9cCmGXiy5UxUzPT8GcKGHip8Lg8V6XeE2Q9VwNPLEUyRJ1BGQtDnv1WggEDQmZWojyq6oKg2cb1Dz1Q7",
  "key31": "3dwdDf9WYbZGVZnuU3sZkfRk3hgYs4H9uUsDXjffVL7A1a76J1dx8Zn6MFftfxyaxDAdts4Wk3gk49FEwcjYWvQi",
  "key32": "5EWGfsNVH1csVdgmGtjKXJurggZcfDkByKsNnkAnQdMAgu9SMrEkFZ8x7tfjRadAuV35ZtvQpEGmzvqcsQFKT1Pz",
  "key33": "UkrGhahQHC32KKpbvgLnoEtwjDuwfQ8bLt618s953gsXPiKfoxLF55kPhbEYSox2L9q6uDUoti6XEjmPYZ7dnjp",
  "key34": "yvxGb4Q9jTY8J7ym9AKTaPi1ZsBAQLW7LfTiVGtDa2NDRJUJw72FNW7LgAx9RkckrFWVdtorqK9CR4fiKdLkED3"
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
