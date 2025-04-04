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
    "kLg9uXc4fNe69EPFo2iatinnby2CHMGPWW5mx4ogewBfcBQtYbZ1wUmHdKCKor2R4Qbu37yxEjC4JvKXPh9R5qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J7qMWqzdHPwAy4CchKSmBUSFwE4iS4TXzhsFh5UBsEL9t4zo45HA96bziWi4mUL9j3ZX3ZfRyMueDBKNoWqnoNt",
  "key1": "4dDULrAACm3PqxQAFAGk1j32iaMQc3pJo2dPQGew4J33SpnF76aNRFujg4PcMqPiLRDjDSbGax71at9yqniGmhyB",
  "key2": "4uvUfRP5xdJ1CM28XsLCFz518bWR3359ovXdSebzJzyEeFfnQmNn21gmbkWhqh14MNQf388oAi4QQNFrVkguKGCt",
  "key3": "2cG3zcasjCmtgsZJtDM38Y56fSbCFmiPKdvU3NzMKCTcpz8icgeSJCcPehdpCXe2P4nubdaeCBD1GBG7HR5DzgrJ",
  "key4": "333qN4xpzu7hrCwaJmxbPNdxisDU1BYjchq71SzoWHJxfkV68kjXpw6quNSi5SaaXnLbjaLZJJfKGPei8wcX41M3",
  "key5": "2xDKGdf9zV9RuGN65VDNxZLDqr39fHRzwizyCMQWmCh1YAHGic3PKskeirrvA2Tr1tb94VinTY1QPBfKfkxVz6aA",
  "key6": "2x4Ygpwjuhn43PYpw54YWJckga7MKxVWkx3ZnqpsPui3VGDzrCQfzKKFTkNL8gB3FFPzd5bspJQRKAwQs2BZaS5Q",
  "key7": "4dyPTfZxWYTgYDSv12iuJEGo7a6AZZqi2bpGHSFohpycM6KFC2K8fZzxzMnqZnMMXn7PkumAvWp1Q2xmYMuGDGEn",
  "key8": "2qjtVgcRXFX3wz7nL1SjHobyn2WWH6k95jACNimYcorRzeh4X8iQreoVGkWQZAw2s5ZQ5qLtSPDa66bRy1Sac2Db",
  "key9": "2ZsdkuXG9Q5Uq17oEA8pAYDRnf6mwrCZ7LabnyXmXYeF32FLDVcyPkrPwpHnY4kCqnTtscJ7LB33wP2NwLinTEJ4",
  "key10": "5d11Yxhc8aHDFQTzE4rpjCdYYwLTrZEzjnCuDH5sQDHX9bwBT9Jev5Lx7QdDfFyjP2HG7ezpS9MYC86FoV586h9d",
  "key11": "4CMEqe2DRUY1atMStu9n1ReqhbVCgZb5NWxqSbYfg7T8MZKj84Tw8WDp2bk53pwjqTkUXRfE5mX4TfsSGzhx1zRL",
  "key12": "4ZwqT65RcpkQmF1Ghv8dpwpV4MZ6p9ivN6u3HoEBDV6WSMQJhnsKZLbRigKTsQQMTvhpWYhcgPd1gS6pCRJHco9n",
  "key13": "2sjsXe6EJHULJVMvSbkEBfhC1MDdNqoD2QS5cJQvRvY9gRBMT6aJwpW86zaz2RXe9hEhJD4duefURguAZHvJ5y2E",
  "key14": "xTNE6xb4pfbHmwoXneJDky236yG5VjzCWnywTcLCRDtoFKAb2YXPyZy5QHavzc4zaatzpaNHug7ypWdp8PMxbpr",
  "key15": "63ht36qhK7ShoneSe5xdpeB4tqigGBXdarrsvpMChhYUQZRtCWjVispjcHCDeyuahafEkexEGqC7YaxMErt2YLab",
  "key16": "JmKs9p9BMz7sNZSmMaRpxtgvmj9TawbLAHPENN61mttyLRyXMhEXawBDb8eLESjFuTw4tLR5RMXPAL34NTXzoum",
  "key17": "3wzDHqVhiJaTStftdbnCr6uVYnSTP3zegQ7LEcxJZPsT2fsexULVqPXibR7kk7QfsWqC5Vq2ntwWx65UNR2bDVMy",
  "key18": "3MKUwcYVeb6GpHZfSrtYaiJoXgYhYPu3ccakHMccf4RjJBTtSTXdezpC9Qsc81xp7mZwtUn5dhF9vzLiFhrupLcg",
  "key19": "4ZXWknoQU5DuUXLAbjXSxFwZwCAbGm7g2po5oYJJexVpBgrdJkGcwb1oJT6gVCRc3LoKVeu66e6ZQskZTV8okoRv",
  "key20": "45RwuZSeWMvN7gQqeN3FK5YQzy2eMZL4DDJnoXUKugSWPZ8U1qti3n9r33wGyE1dAMRf5axqGBB6Ve969BKkD82b",
  "key21": "3g75aVcZ5VmeMJL5HoQTqcPZcXgeeqeAXxXvCFR4YtUMWUsAh7c6Hu8DtSoHVKoztpWX6zJ9Znc5wTu2mPYrtB5n",
  "key22": "3usazwNvqo8DqJGvi3faLyvYFKYnFbhWbHe1YFyifT1GvTGWv7wGN31sLXdZU1yGcQUNMfFRjZaf6iFTUDwmW3kz",
  "key23": "5ZxqZH1mMu4MDqbnoG8Y1YmidMzczwT2dCEzREwtszAeQEre1JdyDZ6zBWN34AtN1NZWMW2hpntS6F4mwjX1CnA3",
  "key24": "5Qi7nQswTvZLxbgk6hf7csZH6xV8itBWHPn7B5GKKRkARMQg6omCzhHEUczfPunYDLNZCPckJ4ckpxHzRahhWbg5",
  "key25": "eE2r6swR57snxDnaq7Ew7gJByt5hMvDvSp1JhGivAjmhjmAfr19MpxG6GbY8YVFwLvzTYo4igmCKifwcRBzRLiA",
  "key26": "3qi7jCc3rqSKuweEzquBy1jVxUPFZXr5KSx27JRdofFgzjTCNEpiNtVZC2Qsb7M7y3LFX1P729HxEtCEQ8CMaJMt",
  "key27": "5sMKHeRukougrkjMEhheR8RcNRW4Jc4ZPZstf2vZ4xrsX6om3r8W7AnZEBsDHcGjyZfCgHxaE8akwSVsooCqsMbV",
  "key28": "4WTWhE7wj4CbUJ1rxDwS4LLg5BL3FoYQBv6NFZgKduKtQ6TLXvP4g6Pppaf7qnTFcSkad7vHuzHZ7TJxJ9XiaogM",
  "key29": "512oi7iYPcW6o7dy8uPKe4AbYCwWbe339xo5yBoXKqTsnnXT4JgfSiMHjzz1uUknPrpHTNKjJcBbEiDYLac3cZRe",
  "key30": "tJcpL2JjX1wjzGFAPVyL1nLjnPN8YaQt7n4bLJiQCLtDQuueWTP1zrLbnUuMt24SwWr4J8Sibm4GL1bFdvESMBH",
  "key31": "5QXTuNcsapesbDiwQw5u8oQn96NSxTNtx6FkxVg22XRu27UgTtqogqwXhNzrfqhCWnAXxqdjz5ZL794tSxyBusVA",
  "key32": "5PM9rMrFuB42xkJVTWj9vFn7Z66CQXsCzJwivJ1MzsZoNj7gHAQo9Aqyu93oYo5XHLYTyeCeiwD137S7gGT7D8Cv",
  "key33": "2WFPs2CiFeiBBZspLE4EHY4nk15QVdB9TXAqteoqEmNxTWtmRntyzTSQjtFRVj9p3apVM6JSdGzzGX4sN6HGcqty",
  "key34": "F5WwUVQ5fNcyFEeF4uosvdosoctLgeVo9aaQ39hXGG9Dk28RFGfS6KafDQsqMxYGi4MsihDHhvqC5eVxEWeNEfu"
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
