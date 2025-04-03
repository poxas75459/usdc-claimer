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
    "5JBo3mVaMFAewcMrG5DZYq8Z8XYhyxMwyQfmekMeDabXPzvcMDpx8FeNZ5rJeuTGMTts2LhPEQceLcLRB8yAxySS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hHETijZaDWc9SWzTYvaDPdaJEsuNRpUmqHPgyDSzr3bFo9XWu1cxewpcEYGekRDUhrVpcEBzdTCZFULDJnaduN3",
  "key1": "4THVn4pXa3gWbK3gukUddnQMEJ6HrQXA6QuS9JSaNBBHi1K1qK8KBHTf47Uin9KR3WzNShw5G5dHEnEfAwMr94Ki",
  "key2": "5V8oAbd1bLWRi5znprQmkmccFHmQCYNVU4ZAjMyrdABz7TjZjSAtSZUXSZzHTfxefg1kby8JAC3PzUwYYT9THbfC",
  "key3": "2mm6hHVQfDKtzb77142MEyEXoEzLbascm2CbHEpgrtAJ2RqC3stUNUZGtRpG5wwtN2ireDaZJkCRqzfnzXCJJVwX",
  "key4": "4txuGsErgZFcMxwLtUcTRkp9NyD88xTfz5uRLS3EjYjoWm22e5j8kwCYVm97PczGdZY82AxrY1bE7XZS6GPkdSRZ",
  "key5": "3pfjbFA27vpMtYssbH5MLMNxuFR1Y9ecjN8iJPNq4QNr9VJMegdfQAqpkm261aUaxW4iqScjPx229s5V8fmveY5L",
  "key6": "21ePGuNwwBqihNwy88U97Rsisb3q88bDM4xZQmuDXPX87EoTxUemkt6FDavkFFR5hKJJoaAfo8Y1u4snXJVCwCtT",
  "key7": "3GqsEzqp7Jq2MuLjRQgPCsXU4ACkwJ7PFN8dUYLnuGJv3yKvsrQZjianrYM93XpBj4SiLkkMHmCcjh4AgyCkKDU4",
  "key8": "doL5DRrnUbpUt2SSMNrGYfQ5RJiSrPSvW6FjBLLUbDqCXh5fmRNpQ8AytyPczDu3zWGbyxfcFo4ZqTZN6MdVf7R",
  "key9": "5kR3i1CYxK3B43daY8eUpyuJ3WKvwfix9ZRpaTg28BaZ26NBERnPkooKpi9EDSyKp9UJqdNNRtXkdiWu26MUwnAG",
  "key10": "2GfJGVs4thiRUh6E3qE8hry2hFnieWPyEf2UkE6tppGNvq6szRskWqTVJvi14CJvNdRXmzhaFkzvwzYELjiRSHwG",
  "key11": "3Lc6rm3z4Lp91vmAzaGRDJRih2EVuGDJPN896i5233pxCyrXgFQKzXpfEJCsB4CvfqQc5vcZKvew8NqowCiAqsdc",
  "key12": "2wY88Adbn2oeG5sfTUEgNY4huz22tNjHKcx6gYRhUwzhvuJXBbastqqqRDjeARYHjWCSreJ6BL2chykJiTTaHXmJ",
  "key13": "28mxA3cpUQuE5AC2J2UxVuBcXsS8m7SYGuVKyf5uGhS9m5HJo81pqrNybvEeXT9bdkmevaEQuvmYC1gNEeS2FdqA",
  "key14": "62MpwwHj3V5zPG5zVFZLEMjSp1cu31Htv7jvCPo4F7cD6pV9XaMXiGsUSvXiDEzoJk5xPoXYk1SkanMMM5cPUg2y",
  "key15": "5d9NAkPsaNU8gWh1QJMaxKzjxKo5kb7aJyN1GHPq7jc26NTcERhTEvnVcsHmA34XYhNFxrSH2CsjETH8FyL92QUa",
  "key16": "2wcdQ25QUB4Ubzb1keVq365Cz6dJeiJ5qDmzPv2iBXQ71rpuKcuw1AhcnZJbVFTMr7pZXam4woTgcmAQu4W3aCDZ",
  "key17": "4MpfsVAedHvaYh8rgVsHvAtToseGW1FPTK2AEPKpP9gLqCgej6bDcxVLWNYhqPhK1JtwfWZYmH2aBTwH6VeCY99V",
  "key18": "5YciVRAXUYYSQFaZk3PzRoNbKPXRKeT3gjgY6ZZFL3DErA72Uc2oQts5tjVWH6vunayebhNvudg1FKaFKwsfRmjv",
  "key19": "23KKBRhzdhjTjQ92tUrTyXyMvLJaJ5TjdRfCEoCfUM2AbERcCX2fgguqLJrwyDiF5wgopBzo8CiEKXc7xHzEqVty",
  "key20": "4pxn4Rkanw4tnLTXzfLcu75qSKqGXV31P4U5ieLUBZ1qPFHihbwLBerT6qGxRopZSDJXWSM2QexzbDwpDaCzrFPy",
  "key21": "482JeYdttq7XP28eZWBPuoc5Dj7tttXjuXXtjvF9pa47x1Wb27J9gNECFLko8S8LumuWrrYHF3xQuhgvh98sJn9m",
  "key22": "4MDFE59wqsRaST5vs68XcxZs62bLxyLb4v9ZJUtQafCHXwJqWWZ6xYm5ocW51KUeYsHKP6hhcTyN2HeD8YDcDz1W",
  "key23": "22H5mwawE2YMrui9voesLyghdhofE6wdvgkdvrgdkyQDe5TrQzLfB5ZeBPipUtBkFduSdiPhCfLm3PCZX3jXVTzq",
  "key24": "673AYPNgduViZAnsWx57HCYkELSCLRtqxqF17azGW6cFYo3zS4LR8pow2KbDaLv8tsEFWzW6c3Ph5xSUDZ6P91Ch",
  "key25": "2vcPUuMur3v78hzUzFRUGeeCS6BszsxBBKQWd9tbXG2oPfACQkBWKNk8nUr7TtJbDgXaaPxTS4zKeRtRRrtLbkaA",
  "key26": "3h4VK1XN2orMhZGUzsn3mYnZAJ3ccXiFJaxVXtVtAuf6SG8nmg7WGkTgtmEHvh9YBKoyzWx8XnjbZNoM4dQ1W5s2",
  "key27": "2h8aqxuxyahCeTYDysZJD9DtkpXZi55MXPexwsvvM7CrCcdsdUQaFKXYhdL8hbm2RYWFu4o4AnUb77DCd2msjiNG",
  "key28": "4pA2KqjmHnfgspg6T8iUETnAixWEorMr2ZVanT8zrcHijvui2HvdZL7fjEPLhDbz7C92zVwaBuEfCpU5SDTVqGYv",
  "key29": "5JZRzExoNKkzd18CRnygN93RvGU5kJKym8utX9QR253rKWcdFGmah5Qu2WQNQ5hkqbM6kmckDDgXNG39pWTXswam",
  "key30": "DSsxZSyn96hiokj6VuAXpPkGnGdV21bipcgJ54iySNTAXdtaCnPsTySDe9hoRurfvfe1YaRgj92zZha3qFuy9i4",
  "key31": "5EVTTnL8EciMaWQXUM22eLxksnnAhBGgM9FpyfSkjuQbtFur1TDH7oPVvLJr15zYN82FNzRn3Wrp1VDvnDuqvLSU",
  "key32": "2bUsMB97LSH7vUfPfcVcpSYrNota7GXAegsWz21xqA6sk9HbPYGv8Ur5z6GqcaGLMCRFKSYvcdsdiXqTvpW7dgiL",
  "key33": "23o8JDhyueeYhXauZZUA4GdBbVdgH2yV3Y9ThJ3wh6e9FWWcVSu7gkpDdNN98CkSHg3ygdWcqximkgr95QPoRn1b",
  "key34": "4ngB77yaPD9x2otJ9M3baRc42rZWa3f9bsRWrUq2pbUnaZ2uj3dQEpwfcEkB9P9HrkZuRrBDiCDvWKa3SLsrS9Kf",
  "key35": "5ZVj7cBvZba6Wed73QEbeSfuxKMyg6M9JQEqpBHgRZp8fk84oPrvmtEQiodkyLgUpwieGaEbf56kuCqeUcD5eCVm",
  "key36": "r3XZG5ffB83vQcUAeXiLB9p5LL6uBZjWTQbSkrSHUQVF2c7R6goiCC7N2eg7NsGLAayYMKJrwGfKkq8k5SNLWsH",
  "key37": "45VfVApswbHu2JTZoWzDrJ5vcYJv4NQ4CTHx1yYbaQZ1CF2nR8f4tiNk7tNMXHFuvvYr518jVP9nHykFuwY3RgE5",
  "key38": "GW3KqisibDaoYNHg4JwbNyctgKgRQsksYdar2JVVK3dvjTR7BBNiNE8oY1d1VikaUXR4mQ83MnmdqDJ7KHM2LnM",
  "key39": "79NuJXqsn5XbLk9mdFMnoUciwbYykzYXq7qgEiPFb4vGjfa8P1F5CPrSL83NeZM9YpPLjVPMdxHYo7EPD4qp5Ke",
  "key40": "4qNkGNwowMiYbeQiueQM1nXVjvF9gnLxCKpMLZ5Xf639LoWk6RdiSAkmGLKiyzLY5xQeWkFcMLTyfqeVrvCiN97s",
  "key41": "41Rd4QfAJPCuNaGBxW8wYReTsyaCqhTrYf1KmcVYha8P8VftrpDeMygFpYR56L5ZMa38KYN6jew4vVrDsxvPy7LS",
  "key42": "2MFrKmqvSFaY1WYMSo8rzeG7fsD88qrq8vGsL6DECPU59JPeobqrfK5dX8dumQ3CDmp4p73Do2manTcn9F2GSYBE",
  "key43": "FZfTJ4uUs32x6Pp6tCS1F1og5Ch1uVhAGaUYpTioy1argGAFdQC1rMySJfdm7SoHWz9hdsXnfJUnZ9kurhiMfUe",
  "key44": "5kJ9dKxUAUQsM8X5ZXz4VZqZkmYFFymwwL2RaxbLFLRbToWVyLCA319Xp7egCycES6SpdKQZwvQn5MdPMyApgVN6",
  "key45": "5SZLJYVLcQBS4d2iHdwpPMDeaMwLgFMwLPGbZbWg1NkR8dZZn5kEKWpJ4eDsFSRDR6XcHHsmmaFoie2L9FEJjD9J",
  "key46": "AbrbcTiHJ2JLXrAwRF41MXWnkJhNYfyafJYe8YCF9GdHQGR3TV25oep817uZngGxxRJJSm5H3ZV6k9MxZLHrNoy",
  "key47": "4qFBeCVNccJ2JTecMcAXuhKHvvdGFWGvt132nvF4VKXbLB6PaYQosJd9kSvreZvWFSczyWE8JtzdheTJmLX5EUsu",
  "key48": "2MCQpZkL6WSs7W49ur9qiEDjAs7HgFupjvyzDMeNezi5jpzXoBpD2mKxXwqw2gycqN3Rni8JiHhDnsZ2b166JLzx"
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
