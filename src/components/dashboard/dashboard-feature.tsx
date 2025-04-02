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
    "3qvbWgGY3nsKSDDnLFbpNqyw8BLoEgVyNB6FLU7RSZyXy6GA6JCucuFCDVmTddCGN7jwVvHJZYnydADUVhYuh5zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2ZRUvGxJJ4GZbfScJ5sqhio7Q8jKPppVjy8u3gvbVpAUEE3ogjrysV5JHNGs8cmN6LbAebCcAkWudavEJgWx1W",
  "key1": "5QL5G8Xi8bTrHh24T3TgURebK9sQowDUSvpCvkgXKTS5Z5D7bBK6qgwKjNbHEjPYH1ijmgHhYxMRZ3v31CMD7xiz",
  "key2": "2WapABPHmXDVQo8sS1Y9ivkKDX67ydnjEULCzte9LdhPmddGFLEZSRm3o1eLnNMVp3w11GEHpEhwLAFzxbDTyNDD",
  "key3": "45NMZeFZ2BFJU3qJ4cVESRP8njEQAwVRYZy3JP6WMKDMizxSHekNQDmN4qPfaLauw6PpmkNakWL7xjisrJiswLzc",
  "key4": "4hCsfkv8FytdbkYHxvAeurpWWv8SwKV8VsrvUmHib8Bj4DFZrp9fjgaPGeP2mzEzfumFnRixM5xCPdiaknXJpTJn",
  "key5": "2ywPJeztsG2qvgqgCgXaj62C4qj4Aa8JyozhJYkEvtPLRJgUr8S6xkaoYC44J1qhboKzeLkuUhKJboRazueHNqbf",
  "key6": "32LuATHeaAShfHYjbWLMiJeZiSF9xocz3sngFnDdejrzmRFC1naDoU3WRqBeTTA6hj2vmcK5y2KxCszs1qqMQXx2",
  "key7": "2fiKEBi6ZYVF2ycsfyEj2kapW2XisAK6ZXD2XNmFKBWMBqqoJD45M1wkYbX8KtXnGrs1xiY9bzfiqKkRMf5amnvo",
  "key8": "3VC1JWmYUjxTyyHGC92rjP2vs3FCFLNXftBt3QuEa5zgHNJWkc6QRAkMBTDVeV7MtjwaLjGqkHEbtWpwogbjLAfs",
  "key9": "61TRh6Zo6E4kH1g5BnGsTFVQV76uf6jUKxNn1AmBki3x9G3VpKgX88a4f6fu4qQpKVcXBU14wQDtjvsRJNH7zVHG",
  "key10": "4Gp9KNwQPC2qLKaTuhXaEH17GF3TG26QgFBLMFmiEQ2XMHimCDfgPWxk3JVNienFPaFiGdsvJ25BM1yHUhNA2gVA",
  "key11": "5C2gDpFR6Awq1WEHDDm2VgVtq6cyg6ab11tzpLycMCBvJMXyMVZgPCQDNV4zx6CYXGXVZyRy5xfcj2n7kP7JD4Rk",
  "key12": "3ixZt77t3uL1XhRwgLWUVLztvYoBLGj3k17vPcDXEE7nKxGg2AzAy3mkBJ1ia3iTb5dQa4PXUeAVWQF83vY5h3Va",
  "key13": "UyzWjNuPacf4N7FcXspRPg6E56rmvtEywKpgK8UVi44DgzX5exNPTRiPdQeT7RpMWEKTkcbXs3AcENBVFuQgTaf",
  "key14": "3ZiwLDVmKkCThSz7Sbudj12QJTAR6ZLu3vN5MYuXCJaGn1FexDk7bEUAXFMomjMLbACXKsSdojaVMYs1se918P5y",
  "key15": "3Qom6AQeB9sSs43Vwq8H6xEssDofCXYvaXHcY7aexbt6LgNkXXq8UH1Fn7BWwu5zK5cdY5TKgAiGsS69kfHAmaCF",
  "key16": "5YjkUHFvHA8Vt6EJVjxkEcGfnXT6i7E9PhXxrwewXRwogvqvFLQFfJQuaDFj7L3rxk2ZBYcRCf4kSUpZPoAjqKZu",
  "key17": "3G4syk8Zi1PWwLMrh8UKz2Y7TGFUnYeZVeQarjRiXe2owmiBACT5ZNsAmPVhg3fyfMZTojDcyXauizBFJFo3sEhx",
  "key18": "4ewZxEYnXUJSFoArz3Z7ec17VZVTwJvEoQG5Ccz73QrjdkaHurBvgedG3WPEesqnwLDwymJu3gd8L8hNgv8BBpt8",
  "key19": "2ZVdhs8hTJu5RsuNRoB2ScUoL1YcVEtYDVu2YpdUMmSBzcRtdztTw7xzam6UzJv52o6K7Qa2vdNUtDHrJctY9fEJ",
  "key20": "3mjWd8R9AG2n7wzqYhtYkUvahyJgKSyj9BZ3sb8fyZYQTsAeTtrrcRQah3TGF8SxdQ2ZyhSMPsGQKGERBBk2grJP",
  "key21": "Xgyp9nJXdPjpJuWNJTuG6NiJqaDN3SmivcmUik4AaGvnukgsmCAMWBAJqXcEWHckhDmDHAAybdKHxZioGWkHkge",
  "key22": "4BENExjDyuCystb3m9ptj71Fx3uzX27UegqLobojtqMt9RwAVTx8HhTxaBx8YCiKn5tS66vLXqCcbQ7PKW89koR5",
  "key23": "51RbmGGe8qM3836eD4HqDkKZUS2rdbkqHjCM9nAY4u18QhkRgdBcUwqw7nY4YXLWxiysB2S2RduusrcWFw4hffTn",
  "key24": "2MQQrBdxcqnYvAXfC8tuxXNrZP98bBvzvWCJfFSVSPUatGabnbQpqpQxgvNaVn2ZcLerbmKvqS6kAWV1vBFburQn",
  "key25": "3V4peLyNRp6C6bB8rCbtyoU4LjdHmyS3jFYch7ELXZNneLgxwNCMGZ1jMfmfjwftrYDny6nxCPRH1Eqg5HYj2R7p",
  "key26": "4ovuKNrex3e46G4XJ1oj3KvDP6okmj9QAdpfy9jSgbpw5h5t7TtTSofC4hHjfqwPYTLX4xXKZ2ndMVLBo4bLqZRi",
  "key27": "2GJmWpxxPVKpsQPTF6igbWpjT683J3GsDnHRAZgGxT9TsdmuiTWRohNQ3ZSqScfBFxKQ9StEsZG8axFxCe22o6Dy",
  "key28": "2tYdg6FUDNRrfGJmcDMRReXZzYpr74sBjbdVmH4t9ZLKwmo48US6TwbD9H2G5XDUtLvs44nYjXYaZi5u9MGTymfk",
  "key29": "4ye7QeQzyvq4WYyMKR5222dpLV28Qphh3WJitSsJWtE2SkBxxtVjJPo4xVLEME7A6dxkq54zAzaVSDHVDTL3zwF3"
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
