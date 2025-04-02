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
    "5KjNgCD2hVhaB1GM6t4zcABXesfpfkpy5sAPuq7SJL6N9sK6iyBfHFN55ktRWCkNcfNZidwxMjeUxMw2MMqxA8t7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611FiLh9wDBArXDx23R7ekjgC97vyGFr4dum1pTewG2aYRvLt1MsfoVyJxW2igE3VNneCU5PVkmmEemjsgya1oC2",
  "key1": "53MkzrjGjRdw1MWamNk9bXgrfqMDoPyoTsQmesCTMVY9FjLKQ4FrxuERtqwjMhakAozTvkkFA7k9BWzu2RLWGt3X",
  "key2": "35gXuYqmVwJ2nqqeUjQP8AChMLFGk5ui8CPiRBFoFoXC7XvTJgeSfDEuB4ixqgWfyVmQ3gGuzQfoMZX5FfHsbz9V",
  "key3": "64DkyCkgw9JfjPRYABpSdVYQhnDd6Bug4BUuw5z2xsSgR6ti4sjFbL9LhB9QNwg9CNZbJYpVjVkCpNZunb61S1w7",
  "key4": "mqtBcv8A9rC8edBgwUfGrpdqRfN7j73Qigk8aw1LBJ6FU2A79mxHUrvi2jh38JYEUysaH6Dw1f8cRyPRuNrtzrh",
  "key5": "5S3aJpV3QEDQXdw7NjX8icKTGSvadf5JHqQi6TRpHPZX6L9vQxSgUByFWjUj1bNVTXbrHJKEmsC94qgRUn6PDVF2",
  "key6": "2BhCWFrJgHyz2QRtJSxpUmpyqbzCnoLAoq1CQyDzpvjsS7Qqcv31yvJfCd47S1tCs11dHgxD4cH1DctFHqq5fDWR",
  "key7": "52nS18nBi2YXEY32z2sKGkW6dy8xjb7S6zVSWkMLiT845iR6o4qC3ShJ8cMijA6M4eVutMTJzcKMK1AaMA7tVUjC",
  "key8": "456vKo4G1j8Fktamc4M961v15cSXfRE8rFWEmGxBtS875FqUqU5HofGPz8yuq3G4Kf3yze2EyyhAz7urMM9dT7kE",
  "key9": "2Ngk6sMFAS8pffQGPfXDaK4iC8FPN4qZq7CaVtKngPRYDFxCLu3jF8Gtbo8pepBJKir1G71oyEsNtGafPrn57iEA",
  "key10": "5tUcCo9YQkQpVL7812RvmN2i4PgYbqAnjTJRJsWEtrZXrFAie7Ym7aSjpyfj78E211PgzwkyLh5eYDdmSPizD3xm",
  "key11": "3KU5QCNssj3kbdsDhKPKmbQmQwSDQ1cRkuesNSk4UvvPvavEZ4pgEkdCBfwqc7X13AS3MaRgqFFfGz4GWQxm2UZV",
  "key12": "3fmKW8VGyW19QSM1xKD1KChKQZFmfEspXmY3G9S9NceR7MKMu7eYEwrH1KHovRYasW3PJz9ciBE4Ezg6myy6k9Pk",
  "key13": "2kKarxvYRT82dwZzMLzPTQVSQ2dZx16ygQHPw3gspuvF4oczMzXSEdrwkLQP6bAdsAUNcLt9Brq46gMo8irFrGoq",
  "key14": "7rgiCciaAgSPCkgZJaqG7etYvNQV8W9yUaQhAjGZBgHvA4H3ke7m5iYsTwU7MEUK6t7rqwss9g2Pchd1KDMEe5k",
  "key15": "2wrjpw7UL6K3Vkjm51qbo3JSpWtvWjg4PAywtpoknnSZpLLcwusjnbswz4JHBr976STCcDCk6nxWXykEmNmw8Lsp",
  "key16": "3TLeehwCwwRHH3Eg9JcH1cruV8sJz8zZBmUgcjS9auuyjAdoHFgDN48EeLwZZbbGx2JVMuzbgMmixvwp98vFc7jE",
  "key17": "C68QaMFRTen9YUq8VAXZ4fi9vZ2jdaouhuTvrvdzc2hUPmjPe6aZAbuPcxUq6DJb5zazCEXxzZXUCzABme1PZXx",
  "key18": "2QwvdMwXuHYfUh4FJzociD9Xv5Q17ermVVyXN3stcVStNTvemo1cVXRQtNBJvWvpwQqpw19CzzNmk1iwx7tAhLss",
  "key19": "4fDtL5Mhj7WTQdT2iAQZ3uSCpzyet9NzQ9k8pz2dvvdxSYnanJrraJoqQrYUQLE9XQ136ahvosa1rbpQFkm9UaA6",
  "key20": "4QFDkxwyZ9zHhB73tzX5uNsyUgs2kcKzJojSuk3dGzGxGQie2DievVnrVW4KBD5ApN1q2ZuvZq78V1MAfrowpeA6",
  "key21": "26kfAxgFQGkngMXh83CtpEDKrh5JWQXuKUebM9qqeHTNM8ffL5USP6wWauerp2Bvto6cFdSr9Ca5XKQakTG69xdV",
  "key22": "w56RnXwhhDga2P7UVhS4H9BkFnvXpty27ChnqXhUYfdU4fbwD4JwyRdukSnqAf3Hew8F4R7ygvyAaE4jtq3bMnp",
  "key23": "3541Kj9G3YcKHPvRw5hUmdKLnVpdhLEznQ1MtxgqLzsvhv69n47dBsnpgbRH3vaAg3Q8NGW5aumUFJKmkMcc9NFF",
  "key24": "5YypD9DUTHGVz9m9p6opqzUiaiVDPFsZWzoJhfXhUwM2BJwhcv8QG5UViMR55AB2f2XH9ZYMCWip8cWXcBBic83t",
  "key25": "HVjvzaCH8kuGbDb5zivLZcmQjQVdRAJV6k4U2cPuLjdK16Fd32uU2CHh8Sc8GSfb4GzmsGJTzbwx3f6FsPgi4vv",
  "key26": "5oscF3poVwQz3DWz8jG2xawa8dyPitYayfpGW9YDiJGbQNcoxAgZuFDL7LiysbMCz5zqkpAdezQTGTqi4koPC2Ws",
  "key27": "3rgnY18rAngeUcyH5UNkhk6mgTyorDkfNJmBTqvhtNSM1yRkPfj8eNg2pw4auJH2RsyQVnqHyS5H7crREa8oRQ9S"
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
