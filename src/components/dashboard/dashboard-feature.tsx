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
    "3UcfKwM5rjKQesjA3dyn2gx95CiG4YQPkkhqAUfR9rLdZT51q7r14dqJtsdQ2ECxpVfUkwKrrXqZapgrVUogEVDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xB87bGmzQyab13U4waBWoNaJejrGyTfJAfC9dPjh6WLaanZoBd5dvtLbFY87LimzRpRFa4YiJ6cy7MyFBVAsxCR",
  "key1": "2tTb6ZsvV8jifckDfSFFg2b2VmgQGUJfyfwjUUwa5HTjUExQ8Hn55dr1S4zXgPDgd4co9y2EyXRQdue29rtMjyDv",
  "key2": "3KScLExbYE1cM1dmiL3K7HCSFU5d3C1Lt4TJCqTPFcmF9YVFqtGfPgSnKE3U5jQs4SnNdsF7qQ7nB7MLqNH1bHyx",
  "key3": "XjLvTreLusmLvcWzaPrFm6YpfcKUXvVFEUSxbAeYXMYBoLYvrnWF24gHdvSTPbhzMkgJUFebvMSqz6ssrbc4x3T",
  "key4": "4bPmBgvU9dvnoEz2AVpGA3LsYNByiCvduh1VC2QR5gn1WtP1sBkSsJ9PWd59peTEmEZYPMWZWVfrPhE9BfVtPG2T",
  "key5": "5rCiVNqxXaQT3fimFkQjuS1M7jG2YEr1iqTgjkGJByb66QXoT4kNT2q4c6FuBHMaUQ34SoDffrKyZ2BfcLAFrhjk",
  "key6": "4UtuYTTmS3jXNwLEcYgjA6XCuzY9DQSGJwsrruHfGw6xe76rEvEvKT1VyVh5iDsiEDc4PywbER32sfjAhCQX8b7y",
  "key7": "u9yPCMJcnaAoS6Adc6CCN72hsCpvBH8icfMDrqaDCnDJvCPHCuyAMPcKMwyrnoxN28ihD7ipij1E5M8u8st58nJ",
  "key8": "5Ly1bS6ujpr7x7c5fWPxw9SPdiYQ8tQAJsVF8xMCBXqQArYiZp9ej9HGLjdBcKYmRMFUs7SZ1fe4W5S4tXG2JCNJ",
  "key9": "49N721nCmCJMxkEr9Lzv3NHCfQ3LxnigaxuwpLBm94tXBbACiCf4Bygnuw8EuyFSA763o4Ruvyh3Fv7UJ9PhXce8",
  "key10": "2h1BxoUcHSFjRPT7ffezsVWzRLER1psgrLC6bTAhK2GWQXpKfFEVL6Ug3uEVvnkKXBguuMzcryhviAK761cYP8LV",
  "key11": "2eX8gkUNwPws9iKAW3eAxRNYkG2pbUZZ5Tgup2kZi2Xgch51EcowYDyBmzrsQE2Vnzq57dqLXwLXp6pCw9r48fdx",
  "key12": "3HWsD1Bdr6TjMdTBKKmmdpLnVeXbmF7wE7sCZQUNX6srnVZH8XxXCKZRW2mP9vaKkfG2qgjW1HHcEcmsH6MzAT1b",
  "key13": "3yUDJrQP85yMVFvncS5d8J457Zo9CvijWnMMDcg2M358AMgUNqT5rZ9M77zJpYvvFuy5MSoX9QSpTAZy6doPS1JK",
  "key14": "2wzjDTHt6fqdioQigABEjc5HarMBwrkSq2AKPJF83SqNTcYjfEMo98HGCHVaaJ9HjhD2X2Bg7rNmoB576aQpxjMP",
  "key15": "KfUq4f7T3Ezd4ZPudmsKxSmiMWA3veYTQ2k7BqShjCvgh7gArY4GRAoq3ZZ2t8bqsHxDREKvb9ft5CALCLJGTLQ",
  "key16": "2poxDckV5ok5WUSWXBv5eqzzi7qoiwoRfeuojj6nCdKXE6aBi7f9C8eK8uvvQg11hdofjhFxnTafVxYr3iwrq5S9",
  "key17": "2YBfyTT2EyotKsH1tsrA81rYtEC9HTrV7osgDd9cGNsCzRjGy9WqMQgBfA5jXyd6LAxMiRwRJrEHpeqPtVgqzrVo",
  "key18": "hApzecCxKfzXnsU7vHRCAK5S8WL9WCakPTgaip8TzV4GjYojiKQbi7pVFqqdHR2z4ZACLh26AvWQpSbQxvKJNvw",
  "key19": "4DnBbvLFhCHDvWNG8N3qw2dfnLHHETox3FMCh1pgvcU4ezDgWbzuBV6hpHgJMoZQuw8e1w6Jq9yjxMFgtfS5Fnai",
  "key20": "4tj5XojqTKdhpMsjyTxGf7Rty766Gk3GbTVcvtctotnSvKNkX2Vmcp9xqKjAseg7aXuWJ4g4Q8pbbQ8BFD4TiDWa",
  "key21": "5oqkmEyUdMSbKLy2PqRe8Q82jQfTWTEkjnNZwN6p4KgaNxs6C2MHqjsSRSz6GLpCQVDW6KJBNFmvHDH2DwS9oCeX",
  "key22": "5B9ofpdMahkY3v3obKEbrN67VungAu2jBeHTEnedGEGzZFjNup1xtkXVogzPXiCfN4huY6WECYEdkDemE7EiHKh",
  "key23": "Pa3kxUv6xyrGN8YoFPHcPhyG5igiRmSdxxCSCXZA3x3TPb9NPnQVJY3CmCBAmjpr5BY7gmdZYxPR6PBcoqyg6Vc",
  "key24": "5swcFB31Evc8ydYdYdq834NxDpf3iXHe4SoDPYozuMyLY3EHp4bNLCsGmQQxx9NcwXYiSR2wCcGxsnZ2UppWCbP1",
  "key25": "3fnimymRPEr5fnNT899Jpt84RHSR5bpZTMHT8LCT72gYjfBaULXdxVsdgSE8gPLmu6tzDHDHp5W1LYKRKT3GcdDs",
  "key26": "nRA5DGi4XMUibXarFSF3kdLuLqN3C56UaN6aMNdKJ12b2DSLdtHABT2pBV1ReKsBZusahVDfbk8ALDcVTVtzuyi",
  "key27": "2jA7SEWSAgrM8hL6J493jX3g92Bsz2iPtZFxobdGaGM5GMQ8BoTU6CaN6Hvewi72xaseJ4kpG316qd2Fm2seMrVy",
  "key28": "33yBjtvrhYE3e8Prye5YtDRtgPM8aikwq4UmmgdRFgtNypfSYXnu3W3uaJF47RNLmLFbikM1M2xXihWmkfMhpa3R",
  "key29": "2xAp5ZKXgomTvY2gxDRmVCWia9KHiq6vSDo3frS2WWwTxYmtxDVqmYNXNmTpcc3SM39kCYBZNtWnhbpA9Cp8CQGM",
  "key30": "SLCt2U1fGqcNgJ8tw79EqygMovGoe95vq55XgvGZANVAscJfTYMamkxihhTj2dEuzvHjypnFFwqeeZS87MYUbXY",
  "key31": "2SpcJDD428axmg8CMj2YMGT3JyCGrnu8qyuXF3Dj84UU3e8LtMHgTwLnku4panbfYdEjWNrUTABXbKeYxZ9vS51c",
  "key32": "4CVNQbikAkjTK4L7uCd8LcV97jEw3f9wAEB7soajYAdCpj7MDWdR9NrGYyGtByfVQD1phw5NdsQMBNN8KHxRL1nB",
  "key33": "3qxsknnSqp7qWC31wsh82f6NovGowELEtxvZZ8jiYBofkoMXARvrbF7fVLYb9vA7CyqRkQKaihUN5X3Vhsd4w9Eo",
  "key34": "3dCxsaw1m9nPziXou4sTTPEd3sDSubkBe46QzVocchEoD6RuNsSxzK5EVcVkfN8RDkXiBUNv5T16tbR8nefU4r2r",
  "key35": "5rdDZmcPEgX2ASPgWj42yv19aEbvReke169RLnG9zpN716AFFJ2b6Y4tbxVVJL4WUaKsBqnt28KhqX13cjxh778s",
  "key36": "jPeASR57QwLQd3NmqTAnkDwousnSBRZFNfrwiQ5At2VzqLHoD1jmzxaE5P8YH2roLn5oTEwxmXzNYLXcUmBHsCG",
  "key37": "4xkzRpkMVfWH79SoQAPmcNHhRA9o1iXvr1brJLtjnWTmfz2adiYiCeeu434iuAgvNfVxWJzwnPzWEHNyCxwZqERD",
  "key38": "UjcgubP8BSTU3FwXkJGX8m6sh6K5om1p23e2wPBenjFYzqxiFx6q6AwpJRBd3CKYpbfT5MzNu7Pu7DGxnh8R1Wp",
  "key39": "5TPNbLhKQx69TbJ3otqMkPHnsadePWG9XmyUnzc3SYbJeZKgW6yaRTfb9HTBEehyShc59sVeL4mi7C7EGrbukW8W",
  "key40": "4dn9eSrFvFkyfL8wQsxSM878G6FEpbjMKck2C9TY57c8sVBwBqC6LVjJVackzmAuZdyuFondxqCSv9FZsYxbzu3F",
  "key41": "5knjHpWNbKqXsKy4FLqvHL6XBrurqP86Ab2nqcc4y9RH1p8BtDaYuvkkfJUPJYAQLpeJfHs6Y18QdGS62sCaCTH8",
  "key42": "21t1KifDhPiT9FVmCuxE5U3ztCAkH3wz6ePfAnHwwNRBLC4hU75Nx38X83XXYCq614sEYVtSpCvW6EjHyUF6SjQQ"
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
