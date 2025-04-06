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
    "49iqUpFAMbkppTFXKursjdmMDdbD9srtijLxgcKapEKTinFFMYSxUqMShJBZgtY9RKtaHkUTqu9Urai1NEkdxQMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQrXBmtQyvEtGNGsjeWiQ2L1M5iess2sFiH6ctjX5Tkd3wssLynxxRqNFk3LFL2j44GZqPQi3uVgn46VxJ26t7M",
  "key1": "4ZZMK7ivAzG1GMaFwq9Xs6wqBQdSRZXsgvJX8oGT56upGuUJpboygrUX6FF8yaDokKDjuj596FBXuSFa9nSCMmFx",
  "key2": "5M7SEiUhwnSgamnRiXwQnwJ8tiSV13h9Khbib5vABMU2JYjgLz34zx7vVGKSvPmu4ZwMqo1TPyvCdeYgZo3CyQgw",
  "key3": "uPb6JkLhhXfUqDpZuG47L5F7mXkhXbJHvJ23NP1czvzTxjhtLqnJtpuXAfaHE5C6PUAahNyQTpWyivcqTTUKC9F",
  "key4": "q3NHLKpyhzWbJVC9zYCK6ZaDtAVUK1Ndedjz6e4YuDhzGEzgQpYR4i3KzAXBEntDA5sk3iDaHWLUPFdKpG6i8DR",
  "key5": "4eXd9LEgJJK1SEVFAxEJufeu7iUonQgBCgFz2okGYJ7Za8J1aehLYTNEQtWmc3A6C1nB4Fa1jtqKr3RLq39cURA1",
  "key6": "2PE9QPpFMkLHvWzyqbgtZydsYQV5jaMJSamqwwNresJ4yrkEtkePS72BN9dg5mjdJsEMuKroMurWULFYVJiWEAuU",
  "key7": "2Dt73f3vcTkSx44s5rp8sfVRrnsk1YHJ7ar4wQpA2T5QkCS5yeVxghtDPKmH2Mxaj8jfK2YAFk1XUafhpY3YHojA",
  "key8": "3ujxCLow6qDqv4xjVVEMa7uXCyGLGnp6J2ZxDb5moUExs37LAfgmLSoyBGa2fpEBHuVQqKUhqjs5Q8EBhPQfXdRi",
  "key9": "3EHGFw8iPJUyh22qi7hwSrPuWhDJpBL8eb45JMPW7njCjxSMJraKWwpU8E6HWfYSMmdRiv5VoyBhoZ69vSUDdU2r",
  "key10": "3CxbS7dEZVPpHa73hCkJmY9d5CPawKMcstHSNRoc2RE6wMDEEs72dPZZujZ3oM9HaCRfpcFHYQdu5MoHWHAZEW1H",
  "key11": "2ayGS2RwQ7T6Zm9KSdpG27GQj1ZeYteGEEajvWW9c1pkanpEtC5bbPUx2aAHaAnUKY5Do7cGSHAfzYxXX7Arnaig",
  "key12": "3VuqvpHLrTARd6VaumKkvcmXUYw4HozQBVLuirMtxQ7vDDhzsYELNsmTsVt8GE3iJ3Vs9MnsXVGDpZ5u8jDYnRGM",
  "key13": "513NsiRS33vA8kNqyTZw9JVJu7Cvgap2Tmixqog53AufjAoEvpXD7eocJrKvx6ZHg96j1iaTSjZHdf53SU8PyfU6",
  "key14": "5ecMzbnoFLa3ywFHUoMFgvnXSxd1zgnAuNboqoLwtX13q5iGsCctrsQGTbDyKVz7LtvVWLe9XgAv1zvcGYuBX21i",
  "key15": "2g69d3Lg3az4iDvNZusopX6hxxHaemQxymtq4ftxTQEp3mgt3S2qyCTPgxWuY2mmWrq1KifPByBJjAML6tL2VP64",
  "key16": "35LzJ7qm2srVhompk3QJj6Z8vAqi6SaTpN87fsEuHzQE4RPZjejw3qjSZjrWmRDBU4ndLDM3hdh8edm94F4LF4z3",
  "key17": "rAdZJEsKC8TF67n6632KLsys8tHYUXZj9jrVg7BW28gR3RjzoyKr987Es6jqBu9qmgDPYhwE6tdx3SY87oAHKmq",
  "key18": "261Qq5NAotEaEjPsLShpMSVE8PPAebXFJ57qahLYwiJcVpRzHYdDenQ4e3oNgWWo4ZEnFB9fSp1sVuYN7hnSEQM9",
  "key19": "4RTbJiaJDfbLggpVsHePWUFhTiWDe3hoke8DhxLPrL2xQabAdYxodWijQGgYRbMo3KXggoWsn1W1gemyDjdZQgSD",
  "key20": "uWKywc2nvS5DjzoPcRpuXJpGdUgxbVQcVq4YFfv3YCsSgBPk6SRJypv2qebfpVSnvG9xsMg8eVikbaHEXb7f75R",
  "key21": "3pkyW2B16KkwPCYUXT3PDnW2A28mFtBTDX2YkTwUUpVidRtW3Mk2FXnXtznCNAmiibU9uThkKD7YDUJmcmp5JE3R",
  "key22": "3gn6DjmKu96KjrrWutrxRRUaxXcN7NkcGN9KAXXo3cwv3iHogSfto3Z9towC2YeEL5HFwfdGrYTj5Rh6zzACjNde",
  "key23": "5WcbwEMPA6QtDdnyWP2MhZk9bXtMb4wRBHoe3RjKmmXW1aXMoagje8U4cc5mAGXMfy7WDv82XytXKPcJDcu4LqAu",
  "key24": "5rBQfCEm6FPLHU6hX82gV3hv1UamD85RRcwZ3WxTSF9jeekrx8kkFkgzVeSLcoRGS5Jam5Bb6Hw7HypeTJ7Gm1uN",
  "key25": "5AJUQUD3gPinTmLesHjGyguKeiRcQdrA1ahB8YQsJtEN7t9VKfkptK3hn8jcEpxpJWvegLrqagTLCoYxYcNya9Vv",
  "key26": "3fukGprMsPe8o2UJraiojECq4tFb6rfFw1TtGhTCtqvrPGYtbatz7Vu57ugSV2GhvQoRdFdcgtgJwVnNnpoxtTjV"
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
