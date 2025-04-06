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
    "VMezcuk7gHEEGrouofPM9PhWJcBkiztT4ddQ3k2urUT1xwFHjgWVLt72zCuv1eVbzcctrfpwLn7UTX1DuvUvJzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRiQJ8DVFfhfNRVwpL3pSdetbjguDXy1V35bmr7zfj6ru21cFLejYDEsikngaCnw4hJPQgJotDhvKokHYfrJswC",
  "key1": "5Nbrtn4KYb88vR7oyXfsxvhi1KHdwEzDsaAPhRde7sHfd9bUA7ixfRvnENwVM6B7TEM93QSp6cpZB5GpmYBqP2Tg",
  "key2": "3YnPxhy4vcnS1kB5sTamyUdy61XyaP68Yewfs6NuktR2qpMkshCWUpsaRYDe9Mb85BjzME3APPiZwY4HQQ3hyy5h",
  "key3": "1QDrucu46Q8WQiEL9BVGg32RuymKfQ73tWV2kcjFGLs1wbzdmWm7EwniYeC1m7rDZ4h6KtyMnv8MKPu1iGFJ1YZ",
  "key4": "3HKqczZXKR8TgSKzcoo8VuWTew45tDM3aowc6zTCu3WzothrhzPVAd9Z4ishg1aPL9jK6gZXGGCUHqWZ6qKgiVFo",
  "key5": "57JXc69DjL1uNezaT4Rmii1Q8FHoyjKNx7aGZ6tztBTWtnYLDu9vqckn8wRBnkD4wDUtGwsdy3H1s8bcAVsMhiSH",
  "key6": "2gj7ga9SNJYwcuwDfZcab7WynjXawvjGWJ7hPpFg1sEvQ79AQyojfrrqDUxkFTDLkWWh3RcyXrZ3xYD8BgG9DN1L",
  "key7": "4bXut4xWECt1oUgdPmwRV4mqxHrAFRdoc1WFsF9nbJdhTZ9voeR4rvUxYy6SFYK8hjXC2L8uRcsjEo2A5uGLgZEJ",
  "key8": "4Jpbj4Y8uGMrCXJa32ss1eiVYvvLWXAPjhsrp29AnxNybX2nEvWBCXHWKm3uNPbLEV8i6i34DpAgi5s8bKGRfitc",
  "key9": "5NNZUe4dJy9yfQogiSAqioZFfDANXGvT88gUPaCi2mG9YHaBhNBcfhWVnULEQFnoZko6JToMu3rDHqe4i45Mqpzt",
  "key10": "5EjiUKazDPVzHjnrg41y9VLjXE216VouBcUscVF5XuhaHAneZn685CYrJ3DVd3mHjbdoqhmNJixTmV13VSQDFcbG",
  "key11": "2qRBFqBGgggH5pmf1v2q475cuTgVjdKRMo3xe7ZjctWrZUm1AvEh522PZMwoKjVyNSfd819fq4Bj6PAru8MFvQt7",
  "key12": "5jEfTZVYu7BjzXu65CRHaj48BHXdQr7ibYcZXJGLnP9hsYBD2NLHrcS1pX444kVSALsXDUF68HyfF7LHk7Z2zRHy",
  "key13": "4mSksei62EZaFS96oN9eU8Hk2k7zY7g4uTyFHszKxDrieXhUo2bv1EHTEip4J3UDvpNwQuc1Dh3mX8L9Ke5GLGTa",
  "key14": "5faj9Fjoy6rR2mG2ofEsUuPFFPS1iVNm1GSr8o1U45Ps8sHKfvzNvg5nUMRQa5K9NskLPpNAShPpBrc2aCw8nZak",
  "key15": "2o5FfU1RmdwnTEnFkZR7gU3Y1KCmLiNTJpARb6CRcFGjLRDQo3Vp7UdwNyP1xL96ZYizGkJdjTY1sJarKFP4g6VX",
  "key16": "2j77MXLp48bWMfdZmzPbqetx98gF7mUPtV7cziykrdYqh65wU66LcKBdvFPcyuf2mw91aSGL7t7twHLcE1qUH7Sh",
  "key17": "jUJgg4Vt2DdRacd74tmsEJmGbRG3thhs9Mt6dVVe9Nyq636AHfD9FSAQ2nSHexhoFi1cr3h6XCmVtjVZpwSp4zK",
  "key18": "4Lx1SRZ9niy53TjK2VHqZV3iGffSTidmkUSz73yfkD17QwmTvAdpwd56tNRWcZH9zqSeuwqV2LnesGyRxaKn5L4P",
  "key19": "5HiqYMEjCXzgefhcUg2DRU4KrMpUYJpxgXE5Qp9FjxAY3DrNHhNhD1ftX2yBFhxv52XLUKUWfHYaEei7QsmJgGBC",
  "key20": "5FDjFDExPN1UXzhr4r6V8RbYo8E5cnNeCXhYQfEyzaHG21UXRUY3SorD4x9vUzGVasnRtpsXVmuDh9vVb9dSVQpL",
  "key21": "3YBwLUvig8w94xcVLPPs3zaKsQRkZGAXRFYw9jW1uXTgMRcYbRJ6ia3kppNxifJ7HCyV4QCA9oAoK86tjPDBsJHd",
  "key22": "3rD9YJe11shbsFUZC2GRE9uz8MzMeQ2Mh5HFdzML4mm9bD3Md4NxPs6YYTaQ7sqesgW4wsWw3nFFZS8AuFHEDHuj",
  "key23": "5YSxh1zjvC9mgym3TS9dtZtjwfsDaNHgouG18KuEHzfh6XMEvvwGErCGYfuUYESc4FKwu9nsdoZxqvPaes2LWSFi",
  "key24": "4hy3jK9o9pHbaZwzmLqWnsDm3whUuQfK2CNqJs3cqGkHrheSn3tiPWM3SRUZ4ZxZ1GsL3AETWFp8fzJvLPmmKUjU",
  "key25": "5kytU4kJsGHMR94apYeWp2EYHrGSBHMWozbJCLipoEXyf9dGyW7XcBtYi3WTov9MoYcUcrKBikDCMYeU1vuuF19x",
  "key26": "5N42Py5TgdYyNf4HnMXFv5yAmC6i7xJ96R9uKcEGanr8JDXPh32Bf8shvXDqUFAvx7tJ6pSU88rMGhteXnBsWU4J",
  "key27": "3jWBUZWbRyvxHgoTbXb1cXP2K7Py5Smxq1a5rtSYNN5heKJdtf1NmemJ7b4jKCNic9xrMxCXpRXStWSyiT4ePnbN",
  "key28": "4VqnP2BrtmQLHTob4UhbYz2WUEjzeUDJ174P6ECXDxWjZr7zn7r5kJLHuCdvGdNaXoFfcKohHYjkL2E78Ezsp8xW",
  "key29": "5L9LQzYHEp4W7y34DqX3oPqJXuKShN651JS8s7xxEN4GWNvNTiMrLgjwLGDNXgtFpW6fKaitxSFzin3A1gsE8e4J",
  "key30": "5AUpU2xKQAT9rLD8YhoGAmx9NACNMEcwwYQiM6XZc8fwpzXCdPYc3A5LPF9BbgD4CePufQY7e48LhfywuUB2tpNU",
  "key31": "41deAL36uVxjKkPJitkqv4F6YZvPyxyfcir9ro7gCaZPg9rwjzeXVKvUDYQiVW3V6uzq44ceZ3fWBwqbRs53MXLf",
  "key32": "413P9SWHVL9tyaTykniyxUCw5hznT8RMpB6XxNg12x1eMsGb8HeuwG6e2wz2bCzNyj8vV7sRifvSvEQ4ZLATPXwF"
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
