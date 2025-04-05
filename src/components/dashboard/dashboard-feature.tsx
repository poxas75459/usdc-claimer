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
    "5fytphJCXqtt8u8VwDfoMPdtQs2j8yYrsKhdzLa8PpgUmupTzPdFmQvAcTAFhAiGNXcpSh9q9tXMkuWaSqJv15oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3YpjWNtUQBf8PzsFdy7fi1zdPzvBvwWzXZUK7CULT7q2Gz3ESwUWp2bHK2eeKzh9X5Th8M3oWpBXCFw5pdgRR9",
  "key1": "2Crw3jyCM2u2nieQ5jpzDWP4MadjZJWDL1cNBJQyAGHs1kaQr58fWUyV1GGYLcAKBD3vZaP2W8UVqpDymPngtFLA",
  "key2": "2omD6q9kU8FcEteJv5T9JTLTFoq1nGje6ZKRLNt9Nb26LrmWtGUGQ2Uq9g9j7pwAVSN6BHQ8Zca9Q5ugGUgnHSjK",
  "key3": "SXqRjDbHF3sgwdrcJUNgwccwTUZXjFHSCrtrPEHuMN9oDftKKhKkbg6gmxv2jJ38dVWgrdqyM42R6qx1858KxeS",
  "key4": "5UNYQRu2wQg8RzdB8NwVdxEpad9rNxyGb9if6kTe7PChaNqaaCVu27c7cQ1UgyrHNzRBNQka6kfgySgtBrnNh7pU",
  "key5": "2ViBRxGxKTprJ7zWA3WEwmaCY7BQX4Qz4pdgaZuxuCDoPatQveSMfUSrSFzZzdFT8WSKZu9kqwr5qhBWhehqSgMY",
  "key6": "4YPLyhy2nBHy8jfd9tsHK4QKUegHwJXo8WKXVeZcFQRp8LyqgM4SkJUA9vsmjP5NtFLPrpbPWc3Y1No1fve6BQMM",
  "key7": "dU3SZYeDM1stMeMbr2KYbDJEvhEezp39XZo4JhBnFWiQkRk6cBrf5QX6UGHyDBZxTKhtzD63CcjdfaydjzmCxem",
  "key8": "41TXPF6JeAoaEa6piHs4rtRCww6H6a2s5txvPigP44sZABoGSYxNEt7oyAsYkBC4YAdhNtvP868xorPTjMBtots5",
  "key9": "39aFH55NkwKP7TGF9H1MqfHAw9F4vVwQC5LGG6THPEpVk2pTfGQh6FHc6mfP2axcYVpbnqinBANFw8VnDCmGgE4f",
  "key10": "3ywnvZf51RdJemPmKGj9wFW4WS5rnY9RWVVpGEfg6ByuWDTjBJdg3Hz1fVHRVYRBXEawty7VJYJxKL2UJFp4LWdX",
  "key11": "3h3tAgdkCA9NbkAKpwkYzMBc5m941EPLQ8mu5WJvXpc6enXTEDaoFwf8fSYThV623RgBLB31bCaZxUirUmWChWW4",
  "key12": "5VzUgxEwSb1FJzqdU1UJHpK4FCnZm2JbiDWYtQ8QT5FE8dpAjNi5cwsQcqx6LdspNyuU2MgVypFidiDHAoQzpzHc",
  "key13": "t69DDrSAYoadF4vgGQ6CdWMtYmaehAGAs5EK7mbASVdBJVDPQJ5TqDBNEJ3QHeNnEQc6GSjk2zMZnZHP9zKfYw2",
  "key14": "2yk12a2APcPbARnfXwbqfGCPEAyVDJ1R8Ahyp8ryHyvf9s7UmddN4MwMHNYYXeKvKKshh4rU4drbypeoNZfoqYz",
  "key15": "5JkSdTXUuHEwq1uvGpQNZ7ZTUYmWrovwykFjGmxbgmdf9zywnWZYwZcq9LZwj6L3qdse7ZJocpMTfmjxf33ia5Eh",
  "key16": "342jbqhPD5A6rvU7NAwSceEqLSVgjNXY63PuddwTF53DU45F7yXJgbPp8Bh73PB5nkBi2oTnpJWa97vUYRQoo6NK",
  "key17": "2mKz2Dx61t42jiWWtS6J4UjHc91m1VUTtNeGsMHVQZQ5nFegXR9ueDsV17ivoJyRUrdr4gEdKw3LHHAMdqQTvYRy",
  "key18": "2dBvcwVixSncG5U7grL1LJNAHQNMRoBpc5kH4sVr7Qz9zPXkKz1fNmB9EssnFLEV84hoLkx7Qx3Uk8YKE6ugxHZk",
  "key19": "3c8noP3uTuEWPpid4Qs1kM1aStTagBJvRt9orLRY3mJoHCiMX2PeH8RJutBTxoxtZs7EyXLj8R17amaLAk38cB5r",
  "key20": "89TFxm8PC2vTSrgjECpd2LCSzTLTDh8bmC2HqNJmC3BanFKDggj8HC5JorjHRcu2eYZUM6ouKpRZAkG9XVQieAo",
  "key21": "dttJibq1GgKeq4VbWh9hGSdf6qdgHqG4ktkPxmFA4pKEfMPiGkDMVTFJ8WK3xGm8BR1nKQcVQwuCdsUGC9BoGiU",
  "key22": "yRVK1txWH8qjvpauqdHqghbTZJFHK3Vnb3mEQMJNySAHwyqkV6Wjh23es2eGh3PVdui9NCWFgy5wdzAtaATFqUt",
  "key23": "4pFhXbW1u9CGCWdcwBNEyRnEZv4TUzvn5AbLWeaWstRgeQ7bt89W1T8RQoTCrYxYwNcBtsJrB8LBTSMkkyC2tDy6",
  "key24": "432DkyAR4ddbHt15p3W1xrd9xAsfXZB8QaEiyfMdbn88nWfH4EbHe6jF35UxpgWKdRNcg7d5ZDdrLBEqp1WEZ2dh",
  "key25": "4qtnahfHBfDnyy3BFPgyviw7BdFUSzebDqXVHSEjq3mRzSS66ZSQ4DA1YuWWqoN1yuGpX765UskGTpdSAcAE4KLN",
  "key26": "5eQT1mywhTh3guatvDt1BFWNHEytmqJzvxKr7nL81noWzHh5YPh4wFxWCsH34UoCMQ6Vb8Nos9sAoJE3TZrCPdeU",
  "key27": "5okKvX8D2hXEdXFLhJirwd4jHH4AkU3sqQeaSj3R2P2bhEvJXWeN65A91LYpZz7vQKs2vhUVvmEcohnvjyqeHE2k",
  "key28": "5ZkT8q2b51iHyzrCTqMX3YhLKMosf4HNcocaeXQekoy7we8R4svKo68GgVpifJfC9nWrm7NU1Uw8JdVx4hDDuvg5"
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
