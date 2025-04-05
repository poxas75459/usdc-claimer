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
    "MRLqj1NidfyhH1xvLmKLxq2BqkCcMzr785Jv1QDHDxU3NTH5ETBkrYppWnKiQrcx5j2ZWiMzRrjJ9nvPuVANqzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PNYEqVx8GaCMNct22kvyBwcis1RuJoeSSUTtN39ouvDHf4kHFGkJV3xN7818gA2FBgfYw2BEdS9rPR1bFNmQwt1",
  "key1": "5Ero2gdEmZoZqKiiUzePSw32pRvPxR3T88m4HURYGKNkZeBt293kFWUTE88hL7kBxBYiLRtbkcitgr5xxvczoWhj",
  "key2": "5M1wGzJB6ZyFLZ6gq34pwPVNyjgMYLrURWzfWJDX86DhFonRpXKY1Nnwe5aMxwqVkEvcY8Ta4TtWVU2gWCCa9SMG",
  "key3": "3U14SJLnZcrgUHYBtoN4fMkGF4k3hckas2258q84gkoMyCw7z8kUz8w7zeYbrPHY7CxBFBs42NLdLeNhL9De3yBh",
  "key4": "3SbeF1nQtWqrh25G3tqCSPgsn8JuPHnWymoarYchtBpPz28E2gdw1cHFQtzyBVqhGQfGjzRbmTfhemjAEgkDvt91",
  "key5": "5YmD9x7EVrz8DriFNpKGovMudVrybyG8uiBK2bRv1o25JGGoShWngpqNggHY8PXhZHNE7EEtrG8zdW9zdnojEfgp",
  "key6": "Py3ojDkXwLSTui3h2feRP36Rqgr8DDsMVFTkBJgccG2jm8roU36CajFf5QZDQFcbaHNVwUp8PSND3Z7Lg4kvWsL",
  "key7": "4xaY2LYUA3Q6mPWuCYnccgeu9sP4j3hZmAt7GHqw8jmurttvw9XSF6jPCgXwN1C9cYqUnMSAYe6meV3Xhs1QiZF5",
  "key8": "4fLjb6yvaxnfykqQKruZEdJmwCrF4kAfFLkm9TiFVNb6xVJyrjuaQTVJTCyzZ23nB6HcdXJaULXbkvWphKQJtacN",
  "key9": "ZvXPx8SaCghm9AsTJyG7N7qo8iaJE3CimYaTGhdPsRnJkV6v84v2yvAM3HeZiUw63ANsFwc59e2gkDKS2t8EeAf",
  "key10": "4a9T59fq1vVLGVMEBMVpCkpZ7LyvRmmCWcVnsdn4Ta4Kay2uZKVDiox51jiAw1BenQogXM5RNYrHSubiigDHGuh4",
  "key11": "4S1DxYgN9SzEpuxP3ouJSrB544qdjVYBAx1rCuvkdoWCAYPYWmg6tYTc7oRKXMpJGGZ5shiWaVRGSj33TYuAoHFM",
  "key12": "2BoAwfHkxCVbDNk3jMRmc5XUpKPMMF3jDtvEm7tjpjy73PFSCsWMRTbirG6SN1iFgZx7NWcGP6f1bEww2GETqvnh",
  "key13": "53fHfvjm2GCLonkmrBUQLExYFhJobV4wQEduZjaBMa9ohwrei3fptsCiqUikNLoouKUm5qfR9MeWWPL2S36Xmr8a",
  "key14": "2p6LNuYhHpxbm6Qas4t6636BAtYmbCkmeQniMN6PtKkfCDzTwZbn2UdH7ahB26HykpcuSxpu9BF8oSLTJDovjWV4",
  "key15": "4Q8gyNtArueJNyj2DkdFqHXDBnat2uCaBYhCsDBP8DfHNYje5BJna8HbrPNpCgYVgBCQsJHhA6Wd1w87Tezx9LM6",
  "key16": "3mcJS5eDe7d2QM1eNjnNw2vf2dw9KCkwQLZJPFkpJK4njiMPVuNira5GDEAzw35qFWFSsr7rLTTii863uaF5Nk9p",
  "key17": "36xKuQfh7VNszXub93RpakLdbs1ruwm8HZQE5RzFydXNouhw2XPVoU5nRhTacmSP6VpAi1jYnLjF7h2Z1TLDerkY",
  "key18": "2pTjgtXYjHPP1hRiqswV6vzsfanQDVSKaf2vgKDux982dRoD5xerR9kEsHXdEs9Cyr2RU9GFVQKrSqnXdGNjtF5F",
  "key19": "58rtFGKo8zrVymhHSY4qMK1ot6Twc9XtwEnmrnuDkeLyQi28DfEMCcpUEa2H21fqvX4axrzwkeNYwH1PFzKm9A3E",
  "key20": "5Gkm2yWUQE5tX4yrdPZ1ZQBsJdqdty1wRKHiSPUDNHyEdM2ZzMVGh7L6C4mUaJ5Mfhs6jghK3nzjiCWhCErDUfTz",
  "key21": "JrNUNiYDmrnGohBA9NTF81VzVwDciSh6UGdDmG45vuC6fxAuPF9qiwdBomQnRvYL35zARDPFNm9T3d1jhS9L7zj",
  "key22": "5UPRmbsfENcK91DGJjLcz5H9g3QZJd9buYunVeLqYstv7r1jex8zZz6eaizhpTvGSWJfWcQcsp8fiVWtZRgyBosK",
  "key23": "5UKM7xmFx8heVtf56DJH5nFBXvsV6sWSmvfEk4Rhtc8WywGwjboUKGZuZMbcYnvzH9Hn1RUW5W1aNgTP8G6jCYe6",
  "key24": "iS8xvro4Ssc7ogZ9Ff9QQbzumK8Emtb3NGhZpL75M5u3PAqqimTQas2oW9dQMQokztp9HLUTpjUZSK91ehhXRor",
  "key25": "2sQyLRcXKiQCNTb8xC3nW2jB6nvxVhZ5Xz4ZkbasZQApy1TNd5D12KyETAcxf9yDbzfDJXX5jd3TQECoeoWQqRU2",
  "key26": "2JTYicmyJkY2SRPEMh4tbXkkLaA63gb3RAesq49mfnpSpUqptw6uJh1p7aGFoP6Dv7fRSdVig5YEdu4AeFSvu6Rk",
  "key27": "5WdYB32FVReAYMHs1UXdq38mzUgRCsZ9of8RCH944xK3WqY7Lk1fbkiXfdgMsMZSKbrhj8gWLArbMVGJSyjBpSvG",
  "key28": "34uSQHie5z4sLMhyPJyqip9DW1STNWJTE1BEULvvQo8nQhwEoWKnf9ZFunU6Q2Rgo5ijyDBUUtgvMAnThhbgBDnT",
  "key29": "2C4TDMWzXiZhXCXuWTVPvYmi5gyJVzPYo8iXMkq59YT1PVYGMMMsUhg5i9Vo6Q2xC3v1YU11UAeV3qJFVYWGXxfS",
  "key30": "3eWYoFcSb3GbCLSUgESKQEAg18JVQCyh86Dhy2rfEmHZ3sQhnaDL5xbTSue3pdaXQSmUBw88XqSWx9jyoR9riBGt",
  "key31": "5EFjcywwhvyxA2Ps5qnyrrEiFZvFLa39e3pCrdmU2CAoBD2hWNR536ALfCzmXZcyK2JacwmiQefC647sMkML4gTs",
  "key32": "2jsA6xPvLxS8h3hDTTN8755JsGy3ATmmytHTK558DbxMVj2drcnKzQCzEpnxqrYHfnj26oHdZexf3HjXJ8fEuxbU",
  "key33": "4tCfesppjWUPn4vqXYkN5nAFhMaG8SRCgtmHHPkLt6kNP22mkK2FHiBENPSaCUrxFf3TXj69Tt3jGHFYPnKGueS7",
  "key34": "3HA4J2cqbamhQGeHNCkkW4jHhG9h8NMRgWRHaEt3K42zueULpZP18BgMytiGdAYWFq9W8qvNrtyueTtKrL5BPayF",
  "key35": "4XtSFSPH5yhLyqHB5Pj9m3fQWbT9UZfKMD8XF9LswcA5HDNne8rPufGAs6EP9xydcFPCPzetkLRdLDwp6TZVvMWT",
  "key36": "yzrQkkd1MxjjgXzC3RgX8WxvzJtajiL7KL2z5xYs86gd5fQFbSkJkSZ1R5aeAHWpyXTUMaThD9qhTuMb8viBqFr",
  "key37": "2eTvBQ2pm9v7qAq9ML9imEneZqrDjPPeJsnaMZMMoyj1zRjs4UpSLndx8CqYbjh52C7PqvcZAdjVCdS4EPw57fyJ",
  "key38": "2rn37HZmPjCVoZoMKAu4YxDdy2qC4o4oCHYSidhKvfAhyhTseTS8tqF26gjNDbRue14HXMmoLY5geeVM22FydQMy",
  "key39": "28MdBAFqTZaqcEKFm2zCBrtbb68zySE9CA19uFaYg5xAMGQDLJyZMfQPoEugmrZFAYD54DogbGzExEnE2uYQkERm",
  "key40": "41KuNoRwFss7kd8mxBBQy7Vq5kJGdWo6e1phitwc7a4W4AANWMP621pzWQmzvsr3VXBp4JatLXk8AoHgt5xsqAqJ",
  "key41": "4CanY3rQ3ZFwszWsHX3cybJ8yFxubnNbSmJ6EdGHrX8CYzbT9ECQCE9psBUn2xYzLKsEeZMzXYS89csXfYFnixDU",
  "key42": "5wMAHduZPgwS29vyg4jidc8nZftbA56572jbvuB1sDReTeiTAu31PTgKd11HkHPdmDxwSzBbESvdN7DD9XQUUuhT",
  "key43": "2wcbUXez1xo9gxibZU8cL3dgLapCSjgYKtdXpGKf3G9vDUuyt8HnrvkjhPsHDUuySBAiPY5HMQ3NSwvjt5LpkGdN"
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
