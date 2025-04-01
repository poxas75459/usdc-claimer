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
    "362PSfAwL5vNGCE4pfW87cAeoiSahycpKfeoLXSRVTwuK67QNJChyGbJVvUwdcbFkq5szKhrSoPGevEDMhxAp5To"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NfAZQixbvYEtX4WA2i9Mty6LXqdDc5BKT1RTTS6pjxxocAxMqbgHdzpoJ3XBFHP6FZK7umN4ZboJhn2KeSZsDu",
  "key1": "3UwA7uA6c2hvXfp4RUyGzfbFv4evsHHa4HLXRYokAWFmKCY2H8CtUKVwE4aQtDurogiLsq2DJkYQT5iWqu6oYZwV",
  "key2": "3qxEBBxCtWgs2vLMcsgECiSdXTsVsT6C6GzAYxGcKtDMjf2ByXxqKw28q15RhLHZ7R7npc6DukQBLVnXSwptxKZq",
  "key3": "217pwj54dPFEja7Sj6Mt2q55wDzrVdZYwGLJhiqyiufrnYnQV1L1LunMLuKDnVMP1hQk55MpV7C2EWSD7HLaJjUZ",
  "key4": "5MMc2n1ESNbEHhMbrctcr2VMmGHrbRnU1VAkoKmprJ5yBwFY2Zb9paH3dNtDH11e2jaBSeYXTPZofJC6z9Sd1Gsy",
  "key5": "2czMm6KTPoUA5wkKYxNp388KxsvsJkQVhErmxiCSqGgE9uAHeLeeRzpNc4DMZD2dcC4QSeZ3z6a29WbAdcYUusXm",
  "key6": "5m6KmsrWEKdiQecymAPeMJ1BeBFZvDLKauYPo7sRRTeTdd2E1rBXqxWcYW2S3M5TRY24YpmaftqHDJw3gtVjkYWx",
  "key7": "4JdH9GEJ218z7B9XWku9poF13qFmjbS7RkNPjv94uJqszoWfaJcy21xxRqwAukWaucxBMzN7YcwaR8oyk43inyx6",
  "key8": "3ZThjqWsq6HzwLNsEGJU5ax8WPicbSDMN79xAy3PqSZGF1GnLPND9UhRptLbNr3PqW1Dy2NMUk6ZWzM9QdHPTW53",
  "key9": "5uZYTkQkmbDTeQ6pmZGRpzVbRza5vyVF8Pg3gzLoBf7j34TddyzXmqpbszzzo2AdgsJ6p13jgQbJU8sNTrtSKGxG",
  "key10": "4exwwRZ8xvxEkvjqjwcqxRsyKkPDQuEk53Jzo6yShgz9uEi8cdfk4CCtd7wi9wrhj4Xais7Dp1cdogXe4MVQTZTB",
  "key11": "27J1n4SZ2sq94iVMKRCtQfHVt9JqFH3hCtj61YoEpQFSTV88M72kJUMpNJnJVAbBrgkU2KFASQN9GxtmEGqxq4XW",
  "key12": "51Ap7Eiq2XZXxgBqojf3iQVbCT9ivk18uYMbz9es52TXDB5jL1fRM3HGp7Tdkchvws7JLrpqPi7VPNVegkQtatQ2",
  "key13": "5Wwh1WWYieam4ppEiJ8AAGcmbYaPVENrweghXSTqMPBhtDETB3tUsr2Yci2F6V2dAn7SkECehHJzKwxYKdQbRT23",
  "key14": "3teZBQcnVnci7aLH797vw1L5uSbt84vY9VUkreWkF4bBXog4RvrdR1JLobkLiDtQsV1cUv5qsgQtoq6XcaAgQ5ps",
  "key15": "TmHmxjK5BEKPNVmZYb5axQe5HmkTU2r9XsBRoXULxYpkv1sCbSTZF8MZKmNMPH5oYsZQBnDN16PH6nGg9C8PLWk",
  "key16": "2JWPrn7WGBHg8Z5JStfVyuX4fftPXDR7nuyuDQi38Zc3DTGw54XXw2siEPFQwy4gq4pBBfv8DuRd9wRxrSiY5NP5",
  "key17": "4o9f4VVsf6c5fvkV49Avo46F9SvPs7ZM77862P64oPwnuBtoHhyUF8M732BFvtg3JBxcrBgvmVqypqo5z3v3GhxC",
  "key18": "5g1FiQZRgbLxr4X16dVgYjhDL7tSCVqkqxL3J5BRSxLEeHPdBPA2AQhoVzoKmZfkrxXVJyp3JKnWNgHUsUdUth4j",
  "key19": "27s2P2UiDBJgffbeoQmfkPC22hDT1ETP7Z6AWgwXz53PsFNzQEydrtyYAw9jdiz7e1hMgk2EE5YzDfQqtfpfTA9e",
  "key20": "34cM2NcnEhfrVqjNewGGaiTKfKjPUm5SoRX1n3wwXjjDqBzUfWgCAf69ZJXundb4uSERfLp6nJ4z4jE3C4WaHfiS",
  "key21": "2juwi6AHMoScCsiJJ3VmZWXrKdBUAsaNLLAHezouwtFBV6sBuspWW85WDMsurL6ymA5WYfMucBawarGitVVxSdCq",
  "key22": "3s9F7TvLz2EKwvg1kW3VzMaoFVCbmzvXxGahRZssueKEZSD89m1Mbw3GRWSRaC854ayhXbBPZsK4etUvnueCgg4J",
  "key23": "2rjgoyfQwVUCDTqAbwZu69h7hPaMii97NuMnWU53JeUPQ6aMjZ5UVR61ozhKSb731hQsdifP9H7jk7ghaRoBeFVV",
  "key24": "4qnxWdDy12PHSsAmoVgzFKk9t2B71wuxNMG89d2U94seQVoThMzMUyZXqZE7GrwXyJ1MpQJqLcZGAA4sypcudreN",
  "key25": "2CJ8detsd9KC6XyqCrf9aG4oRW5waRPTVN9Z2pzsbNp8XRmTzN2qa5H73RsiMHuS8t1mAHpUbjcro8BaDzJHjudq",
  "key26": "2zDyiamAT9C1s87dK6YMC7s2n4idugZCvK1uEDvpwgNM6iytm1aa3ypTk8HvQu5snyrFJbME2wGfqYvYKUbhKS4V",
  "key27": "2XqPP2UQ1H4qBywY7tcrpYLTQrBbpGsJ2SBGzrjLjU2WQuxhq9fggFeSJihyAuiwiszSjmgnm39zi7LTz66j2VCF",
  "key28": "2LLwtowhttQtyWRRTLgHirxurYm4fHDP1UNqzJcpJfPLK5r8bA8dN7NE8ZvmfGXESSg6ySDQZZRmiF5T78u5G934",
  "key29": "2EwP6vyD8HmFy1xX9SM8mix78WxqfwCEARtJar9psH8e22VuJ6hY5MRhUrcuU4Ms8g5RgxHYXGCCmPA4iYSqrebp",
  "key30": "38CBrjL6ywsJkxTyw881ZF5XyUSZr34tRGEjSWvKv3zGuEhz69fwG5ucq4FgPmCUHQupHULJxZDHBw57rFCUWGHh",
  "key31": "2VUgoLRfjTSnax4vTuaJDh5LckXvUWPG6hc3d8kvGNo7zGBNK1js2eSwbQ9hv4bMosstKcf3WRhcgpyEiqwZegUo",
  "key32": "BBEpkfLzwwM2NiveK258mpVJN3yHyzQwsLyMkwL5sTcQnHSBBmRz2x7S9wgprEM4PjrMPW9ybD92ffNCoKFM65d",
  "key33": "3zeZaQnq8dbSnNyso4AEQ6HS9FgzuedMCv4WoPhNM9zt4Aq4VcucePuVgjYAR9ahvLM18ZuxgAkZCci8iPsBzdM2",
  "key34": "s4W3HLnjTPknAgUdju82rPViDfT9wxeEfLhrj9hbwfqpNCQpGrpe7GMHDA6z6YX2EEaNv3yKh1Hg4gXC2xoLvXk",
  "key35": "2AX5ZDcvoUadyVT61E9NFSEenV2UbTVpYdd4F7awHMtjeSrZDfMefustxVuSfwxLfkaBFWPsiPqc7R387V4CRGZj",
  "key36": "58gn7i7upMmP3Q78pTfDNhQvCm75eg4FBG3sj9WvzZSSbBuXTvC8yX3aZxgrHDyJok6y2NjuRRQiNtwhZdhwgupa",
  "key37": "2XLdVqH6QgpNSfVQsVbRWHJU2Xpzt9SCNMeCAhzhxBc9BYtH27C7prsMUB2ivvBBssBRiC4wrkauzpMjHY3BvDvH",
  "key38": "3EFYGt7HJoBNMHxAd6nsrd4m5C9MX37aKcEh9NcGe77Y86cTxSm3Pkb3MBATir7iQoyhA2gGTfGB3cS2neGfSQkd",
  "key39": "3kBKrtdiJDPKC6FBqUqe3jeF7RbyjhdH1CopoV43qapFEApe8Qd1z9mQUqoXQ4A7Fsd2JjoGCHQV7hF3LoSRkui7",
  "key40": "5KCwuGe8MzBoCGKRvRqetk6khxdH7fCjvE79LtJCFysqpRM6Y3J84d2Ea5WDs5wfgzYMMLq4EFjSrHP5uNEP3USD",
  "key41": "4RzL22oQDKrLi7TZzZ8VJ1ZfX8mA8PiqtxsMoUnKcvWgZV34wgJYKFdjeR6dwS1w7omEqHgSMywWHEVkNx7j7Poj",
  "key42": "5uaUkvzPXKkvJYb3eGLziGa488zbZgUSRZq4B6fm74xvT4S6uQuvt8s5u71WaBCWquZEe3hsS1tWmu7iKC6kiWuf",
  "key43": "iugkhPkJhGApd9iSFfuZgwnfUp8BUBya6WEeuMNma4og4S4ooNytqHdNYXnX6rnZKnHAai6GW3ZmER8ctEq1cch",
  "key44": "5zuosR5cBR6uMMH5xXis1GXLBBfF7dKoPEdWxNomrLSxpZQ6SVbRNLx4dtqroBBBFAn4A6tNoG73eUi7bzevbwZY",
  "key45": "EPDA9ZH7mbhCuMW7DLHWCdwPBJ4qEKPMNxwiEQownDPGwiiiL5iPvoEVPGmTxZwGScytTak8J3bwHaaUjMp693E",
  "key46": "2JxyAmRd71sxYjwSssBxnY9EMvt1KgdWk9PgH3ScjTyfZdyWRZL42W3uHyzWQrTAnHyzAgGH3vK2i2wPx4QveBe6",
  "key47": "JorR6f2sEvjZUPrLfRbATnRvKaV9jpz53jsVJJzvfRPk6tPhZBtnZQQf7KqqfqQXPdutaXYtyNjhnyonZAGjG4G",
  "key48": "5Nev7TBsoAnkRGvc9PswW9soNHdQ1hSr3kGNdWtmXLkkEtFNiYWn8ujtQtfpZKGeqTJ9xFXJJggghtxNJ1LmxNmo",
  "key49": "514tHM7dxWvMUgsmP28syp3fFifUFRvZXRenCuJ1mu148MJZZzuQYPv4KmBuuJgDAtpU5sPZYinP7wC2PVfekHtu"
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
