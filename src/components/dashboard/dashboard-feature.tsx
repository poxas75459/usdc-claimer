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
    "3QtWFUEXbqSoogqi5jx8srFxewbpfyezYuJvepcyqUaB7Nhwu8LSgArnjZb7fep3F9ihXAyU9544UPaSFizE1iF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTDAbTkAZYyQqFbx67brzYP3XGfiiAMX6rrtFZUc4HioSKvP7BBksPSRzM4UMqPwVhjW97PQTp25NJXZRuJw7zM",
  "key1": "3gsZapxJGLrwAD9DFGuvZorTG6hAx5qQkELtLpRkink8zop2mPsWxiDmDRm6b84f6aLw7YgQoeVurL86W5dFSUhF",
  "key2": "3LoUyexi6iuaQTfD6Y4UWxoptmHPMeiYG5485QTFe4FykNztdFgYPgZeCZLFCfYf5NQE4F4yF87Jz7UUfhLWaa7K",
  "key3": "58LgFa67DryuJRuNB7zmLdd3yzdMNavpYXSfV2NCriGum5XYMtqjRWRuLjoAgeHPrMzyMkLM4NF4kvMhtHYZ817T",
  "key4": "4joBsEnPZtrqrC5ocxXYhMct1xvcHr3TzzBaGRhEs1xzEwHrwpFzvZ4kPNzXnV3n6c4iFitc8M8jBLuDgizhEh88",
  "key5": "5As6cF9VZiLE15wD1ZAhgoGhjyd3oEAUcYCBScaTucV8qB8o2XZb5c5vahAeFp9g1mzx58ebfVaEKiWKofQUb3Nb",
  "key6": "4fBXWvM64oTxSQ9aMufxVRtfRcuTVuwd8uxvUgQhQVQfR64Qv92TgC1sVNAc5ce56hP85xKzuQQ1QiBR7dDayFeL",
  "key7": "4kQP8n8xYEh1Cjx8bgh1Jes3fx7zS2mhcoMe6JwcfRUqnQkmtBULPTxJy7wkL91zqe8u4vtfajJmAs5dU6cgyKLb",
  "key8": "4XwZhd3QTsvd67dRmdJYRsAitjsADFhYE5rjMD2iKkKDNL3V9ygoWmUod6oWW6M6c1p7DN1jicaQ1Gsv7PosLXHL",
  "key9": "WA7jzH6pBJsb1LRyhC626bJ65N2DfTi1UEzqHauqY9WEnMdHeNi5rxKNHHBGn6FtXmUxrGyQoyby7x4PoxM4Fyz",
  "key10": "3UGzaixH37MBt8YbuK9WAgKnLNFxncGvvZcbGD9rTLMdyf2uvrFgrDeVCqF1TYiDoFqcRvUxSHZRbmxCYEgh8U5o",
  "key11": "28PAXBDDfBeQmKjS4BUHqKNjoJV59oTXR8nWSHPgUSs8HnT7MXAmjRPEZsCCoDViGTe5s72MT73MPdwYQZEurASX",
  "key12": "5FKB6vuE8UCBmp5cyYuwij2P58jfBy2wDd3Nkxms5fJ1eP9zsgny7ctLrg2BKfCMD1idzEBwAcL5hDUy3LXyumcR",
  "key13": "ARZKNke7UrjymiujJRi9KpJ59xmVgVz8RKXpuB5SzasY1Ad8Qxawgqzu9j4mBMGjoFj3AmTNoeK3CCzDijdfgLu",
  "key14": "3Mqyp1JdhhNzTYFANpJDzxGrPXNgDt1t8kdkFb3rZccM7na25H9DUuAEwpAuVVEPxS5E1FCPxJC2V3s6gbPmyBSp",
  "key15": "63R9VmKveDzi3Kn3JXY8vwjiaz5YxptPh55jSSm23XmmT6bsDhDnVEKZFAbB7Pq6ZM7vgbztAmSo211LtV7pxQH8",
  "key16": "4HHgDrMNUzCJikf3rkmufJpKER9QNPf5uaRTLLhYMpg1Bo5fTPvRHAFgXNZwudDjWdHEULqg2DycFPqRawmxs6fF",
  "key17": "3nNTy7UWCMPNxXZrf6iwuLJLXVuN97ow5SebKNqqh54nmjJxtcrGMUuxD9vyRoeADdr9WyYnpkEvAGSNUgZjugQf",
  "key18": "k3ecHXn4nAQKa3S4F5G2KHHBxt1ga1jrhvWgtGvozWwMy9MvGkZqtL3B3d4hTP1xb6FNthnowPrLqXkbdJvqJom",
  "key19": "eNi1NAFPHvhdc2CyvNwqt24GzaVeS9nZCi6mc4UKtrUzARSMVbxzghAyu6nhar54Z1LMKidd1zVboKdLXMGPLez",
  "key20": "4SDRH6UsgTYu5WifuurkaEuLEDSJzEQxnMH8kn8BERKSYuFqczUPrF1gtEXCyRt2zMG9rjFBkqVezJz2FHmQkQRk",
  "key21": "5zubTctN9N8as7H2USVz4w5YuhcQKm5rzsNGbsJLnVqYMdkPsQKw35ohc1caex4XDvRHZoM7FsW19fNCuTrX4xsD",
  "key22": "j3aVoKBbm6BoxuorULjpXHprKoatsf7ZNYqaTj21mywSXGFFgr8dmoJmNYdoHHjAMGLsG2YWbcGGrVHgr6CUk3V",
  "key23": "6kranogjzQXdPz4ydhZfevGJesKoRBQJvaNFTA1sE7vnnR5AAFHzhijo2Pr4EdE6mNXLPaV7r8V1koVhwSD4eHi",
  "key24": "65dDXUo8EPZ8E8LnjhXwLUDX2uRLBrnuwtKbygQfHRgWuv8r5UvLV41YQKbQYB6b5uuribCa3Eh7AtkhsT5tBLEu",
  "key25": "4xjeykK2QKxZBMCz1KmKDAD1fo1Hgf1SwkXuf6CoewA8L2zos1jvx8YRrMDUKM4ZdqdvpYexNuJWNkoA9nAVZqEj",
  "key26": "5BWmk4twx3PpgLVutxGughLeuB1ocATXU3Qopu2rzyfiku3g8N9eYumTZsPjdrn8gRAAJnC8A4931px4mXq6mpfN",
  "key27": "5aLsmPKgFJW4ZhyqRQfH6L2QRaFTAxcTP6Fe6AgGqbpHH9K4wxUYSV9XeYi3TbJF5xVEeQSxUm5QppYx2fBw3ZjH",
  "key28": "o9QCQuKfSS32gGB4aqxA9T7euqUMTi3uU33zXRquTPhg1Qn3NegeqWC4bxiAnz1yYSPH95zWzqQFUJGRnT3vqM5",
  "key29": "Tu5Fy657Ph3jg7QpH27wGzX27Bz9ZpR2qJGDZVW8xDaVu6mSJkF22F8vhUF5rUShaAnPgWPEzHEBEKyo2x1A7Tv",
  "key30": "4aRePDcYb4dDWs4Lsa4AGuzpvpyrkLWSubYvvCWoFPUXgihPH5H54JZQz1bofyjxtH8vCP4yZCCTQAQ7hJbXkV2M",
  "key31": "5G1XL788mkvStbEhHLz37rekxYPskFLzou5JoCsWZFoL9utgbZdf8czRCQvFQA8WRBUsDPStJ7UKxUpM2KtR156a",
  "key32": "2JFw2YerJCxVKaJndDkjZd6KguZuvALdd3qxBXVUWh3zNcva2HHVw6UjeXEcdnFFMui7XRq5fQhovVjvH3ShsZDR",
  "key33": "5w11tPbPJUow3LuFKsq7d3k9f983VdkrGv6swNXyTrKGx5KTUqccMsHrgt5ijQEETS62fLsNF68x7CcrgWdcQZLK",
  "key34": "ZY8JuVTGe26Txoh1ZrcpJ3hCj32hdo2465R24j4Z7yEuhoPFbAqzqcGV8sgW5BbxcvZgVxRLyzdp5piNHxksv4V",
  "key35": "3PpjBoY2hTqB3QnGHY6jBTfr8BZf7n1ZbCdxfRy4WN2oCMeHYNtm4JYkpWyKfyA23X1SNQRGM7pia9rUuLEKd2v4",
  "key36": "4XsMaRr2QUg6FvLwaMjyxsoUtaYvpPm2Fq81aqDzEdfMPXLp1ryh1JSu13yG7VZyfoEfiboZ5RzVYZyK1vDNcQcv",
  "key37": "ikjFUsSyFLqUytQP6enwPnPxfTPYSjMfp2gfZQnapGoCg6CCsSAqnnpgV4ydkERMorcWWmwZM77rjyLXjM9D2So",
  "key38": "23bcUkufMXLYyb7EJdDvDcdHQh61kFarsYmpeH5djaTDcZQjY9Gt5nXcR7RFokx3Qqta3qhbrwxtrk75rj232caz",
  "key39": "3QPU2aTwGqoznXUFa3YFpuB3FxQGHu9iLEx9Jup4YX2HMGm8GjeJea6RvibXj6F86NSEGwtgWwQHGCKGHKpYnhGc",
  "key40": "2qwwv7vZec3ZDRxEBbVPdyrr2XEjnEhzmgjCsTGtmH1YsPk4xsREGTYa1U6fmiFDxqFPGTWFQJqq3twBMfGJDZoP",
  "key41": "pqaYP8EpfzkXqxEz7i6uq2p1dAeqV2PbXcQfWXCE5PWWykwawtWr8Y7yY9VN5yhXzJGUdBiPPajMabk9ahKCW68",
  "key42": "2ZGkj693hEqAzvPuoj52sEVse86X8kWLNjArQbp3cU8KJ53RkE1DzoGNJ8oznrNE5AaZngUyjKMDcq9wg9ADfNXT"
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
