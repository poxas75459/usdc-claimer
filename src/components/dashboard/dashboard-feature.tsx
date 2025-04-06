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
    "3mCYCzs3gM54AMhZiCaqvrvMVVXPUazdto5MQautyfwUSfn9DVXVibDLCo3tAQeqFJo3w8zmHyzF13HRxDhRieko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duy7ALSUckohaorpEKcqvSSrcv4gaL46WJXrcyYDTW51ukSW4Pwf5YoDcpKoqDt4ck3asNnCBGg6Lz3xjwhJ9D6",
  "key1": "H3G7R2LmVvWR9JUQBxqzEHphQBtdX2yReJ7uo7gGSS6zb7rp516ZcWmFy8ene3eBkVTV2cPc5qT28YQSvFctuwt",
  "key2": "48swCNA15mW887aNXQGoLHAjhtNEhgfGuXLPaMr8gkTWCRgpZF9GDhq3D3jjZ8EHp6ZZZhjiYL5PSLSCoPgfxHXi",
  "key3": "4uckPNcnF5SWn3wXMBbozFyxadRzsEJojCMb5xzqQQhkEHjCB166FL4bkHojMRLSQ5Hq2EqPgxMYwcJPna6BTnJN",
  "key4": "3hgpwSY8miRpshxidH63tkfGdSvmcYFgDmRei6VYLtLACQqv8C7gpZ98wZsWKnCucH8Z1N2ZJkn649CxAEr36bk8",
  "key5": "3Q71K8maeXirR1gYMx318Lom8jS5Dqhqx2Vzn8xxeQK1ViQQ5U981tpZmiAeWT4HMY6Nu28awNwLjC2qU1VdmWyh",
  "key6": "3EqQxtYvq68Sh1ay81nv5QH6GFWVEq4XwEtSoQP8xWfzbUPJJpTCryTh4vBBvKNzQLndVTikM9yAocbHSPh2Ytqs",
  "key7": "2uZnv9jLHx5QxGX4ikYcxiA35qwqVNvFNAwi3gE6ztGxgMCjCMeqdKKZVcqP6cvJ2F323VmRiZNX1EgXe1PxpsMU",
  "key8": "4i9WFPCSQfxDQGwRLcCab2M6xDvHduGMv92gT5TE3ieXZ968kioYyhbTRb4UJH1gD4xxA6T8NH6uCDGZSPo3y4mX",
  "key9": "4w6FMqtiUiwPssGH2wTMBMc4dE5y92rm1KD7NazqCdPWxH9hzrjTYxaFFXsZQS2E61AvTq3c3ULcDVgcKu4Kdt9L",
  "key10": "3CUM3wf7iSZSKaDX8GqMPTBEr586N7rfwxqLYSngi3MUhydCBoBmyUM92NDVuw4B41yNTi1hMWuwdHtkgpBKwLL4",
  "key11": "5s992ACx6BVh1ccLkXFzeZe1ws6Fa4LaWnv2yqTVAC5C2xuA2RCBAnAAH7oFxTDDiq44VsZ3qVaP44zW6C4yejUD",
  "key12": "3vbhfELRAg5oBMyWTjMmYdSzZL1r9ABAA6RvxKLgh5h9E5oY4JX4rz8XopCdmLXgx5A5E7WvzW7mMEPA76uHFUQQ",
  "key13": "ptmgph9bNoac5JyQHCZvubcqeP41B21KKAHFT8dUthcAXDrfjsVtUaLWJjxvdUUfCFBF7vSasy47voxi8TG56hV",
  "key14": "5XkR8LpN9KrTkTx8R2deBGtcWACnC3j1NGNUp5dGfPCZw456M73eesWKAJkJjABoWaQvDSQGqKgebDJTT4zjVG67",
  "key15": "Ajh37JwfX4LAxxzfcZb17pXmR3SeeuKznZAcuuwcxjUw8PxzVNPVGxNvy6T8BQ2byHfSTnW8T4cVBAzu2dZDQhZ",
  "key16": "4nMRZRavAeBCx6ZDFX4SHmEFzes6Hce15yEdVRZGsQ99LqXiWRt68DbjEFUo6Z2765jFuYk7pQAobwpzHyThL6GU",
  "key17": "heHLThP5wcYkNahxFraEXCJBnmD9jEsNXUGd6LC4A8kei5NLryj788uQB3UwPXoaCxLrBvvHRKwMTBj8HnXoxHk",
  "key18": "5F9FP5qJYk8vND3a2Y1T6uv7hzXqTmfZyLhMsW7UBQ21DnnhtXH1MQ5vwg4f8bfcenCCt79RQ9CCmkAPa5uXEvxS",
  "key19": "22jjHsyBUjEJudr4pRjpegfzGNxvosC576NMuY9YwRZ7SBwJpM5ak9uC77nXJJ4MCBVymH4iz6RSpXnWkLyTYn7h",
  "key20": "4zrVANca6S97p9wF3dWSGijcTqscA3RBQcxJyHbp1dfSH4K42p5ZBzjHE2Mo1LoFmN38cNb6N2gtnn2F9gVFm6HZ",
  "key21": "247RRgmj1QBvAKAsuhVK7ywMCaMZw5LdT8yi7BYKnRV5HJMwbVTxhan2hyxc4So4Nu3kdwGiy3unB2tVWG6HvtLw",
  "key22": "5yutK3kNAy6yAmr7CeySHd2h9WtmhFWz7VcLQLEtN8wPigb8S2wSdbyzBK39wKLAaXi3F7xMMSUvGdzhiP7MfBar",
  "key23": "2tXom81pX4CyKiaKd2U4FvASb5URHBWwxCfvhSdnb92yavs43ytaDbmkAeFQVGrdMX96R2YQmZBKXAunVfgDs1wj",
  "key24": "3wHRJAQqjFuDSEipMeDDw2KrgJMKDYWCJNo2ZiG9xFYgKdtPUvPuZ5ptb8gMV3ahUBvCxfsVdTLbNmFN2uYWLpBc",
  "key25": "DcVTFyAhiHpsgJBsGDw5d2TaoxiHHWGvdtQ7kU7rHJM2nZJrz2obQTYqXRpKKQ6ik3UctzPsUkrwdspyeqUPHkd",
  "key26": "48cdV5opCwteyU3PYEhw9xXNEfVjtrVyqP1vzdgPdERqqCxgHSSa3rvdUw1SLRVXPwoVjhJjADEpJ273bhc28LrX",
  "key27": "3U5KkCnrczQV8gRE73rvu5hBtTpYVoVhcgzAoMftG54yYVmZ9d1ycB3KMJqwQeZn1fwCKHGscFxUEEa4jWY2UGzZ",
  "key28": "5Khmr16trPUxydpxeNF4JxAv8aMSHxWfXEaAVioAG4iwB1vxnErNUHidzzRwAqaFvhrP2tp5s9NTAGRrQnuAZDXF",
  "key29": "3Qyj3Wn1t32NMMVEF1Cf14i4u2RBrhV3jeRBWTh2NSDZ6ETJLfeUysRWo4iREexhBiXeAJMRgpi7A8pBG2PotUM8",
  "key30": "5mEk9zX24f8mauE5AC8DrbgpL5VNkoMyzoRsH5grJFiodKLGBNEAiKKpxoJteGgVfo3TiyByiExBWiTAdnVG64Ju",
  "key31": "4DZqBJj4AA9ZaPpwSUPH2Tjhn2TqixgjZmka33R3x2adEyAeAqvAcDAJo1MiLtUG3iS2j1WwE19zgKQbPVCakcyS",
  "key32": "4RsnDhbN6SX2qB6z7eDYQPeGtTBW3bA9kJgHkYzm3uTCFpTt765RosoTaydMTHE3rTEFAzUHtAYi6E8XGHXpFQcJ",
  "key33": "5MA816GWsS45FG1vSAcVnSASoezAUGJsip4yZfLAhhAofoLrJGYimGvJ19Y2MgfX1MWn238tgTBq1nzQLWRE4Db5",
  "key34": "2dKcmj1N7sNACa1uWgQzitJTuksemyXbMzajcrHPyffyCTMa9wBBf65PDE7fdNGScMoKYCfymPSMMkd6AGv5KxoY",
  "key35": "3D2qBaXCovvESAGe3ZcNSbnTWvJiovbqEHoe8heeHTurbctuD44txAeuhfPDKJA7EqLZx4j6oNayr4cAH4jRJkLo",
  "key36": "4kWvdWWsXVHMSbFg2LuSniZVZbCaJYa8jWekkkfZEgGSsTkX6f2vVFEH9bAfni3Kiz5MrRV1dhkvuerRUbRWTrw2",
  "key37": "4kZMgpFK38KTLAcVAuzpZnae4CtAn79kAMeLKGzwHd245UrDzm5kL9UmwdppBx1LACXG82TS32xUgZZySAb4AZRB",
  "key38": "3Q6Zozbm3zYQtvjmDQf446FzYEHkdTdAkg2YYeTtpAvS86pgbAXDz4aH7Gosar8VoJHqQiZ9MV76FKmHuz7GkuP5",
  "key39": "o4LY2zXUZkUs4Pz9L2dhZHYasRqVQtWtoCHHACTfekN6SPTuoGVYoRQNE4bYifeoa2TibRFm9NTSt1vtFTWPnr6",
  "key40": "XgXPRJvGV8LYdKdXLt1eeJyrouBBCSAF3GKCpYx5PNdCKKxqamU4iq8v2rAVF3poRXcf9jqDEQsu32LANTdTf3z",
  "key41": "hY8BZK4PJThFmoDu6d4J67g1hBY6AWM1ga71K5Si4whHJEu18Sfk3sXmacy6jeKVv25JQ2axXajWJFLiHgmM8C5",
  "key42": "5zGq8YyAQk96jLDrGSGDhJnvyJL95AT3gsRpX1SJvPXB4sydgDHXMtE8EvXtztagT2gs6zQbPgDFKWdteyHbozQg",
  "key43": "2SoxL1KaiZedaZf52aJ56SMrshX6Js6BJDnoCWX6VMtnUnXwATs32k86HTcGh2yEnTehwsH3QVnuPojrpsEETsPW",
  "key44": "fo2Mhmhgji3QNBQFURfUDPEjvfK29fkoP9wgLZmpPSy4HECaxYTEpr7Z2fSvxobQpWRtsjkGWE5v2RVbgKwbcRr",
  "key45": "5nShvXM9bzBMJoSCnEa18vBwg3UtfGMgmAuKge9oJXnqGgXi22LTw8nW1STkUroJHHaNgPbKofauCyu7Tpv7iy8n"
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
