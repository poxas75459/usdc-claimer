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
    "HhMNSvspw84GnRqGPNA1NtYrZm6w2Wg1QTnUNKtoT2XZj4rwcMDmQdW6wKEvaP16ybPogADAeMBPTJ61UEGVypi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2CCTC1i7AAo3dAmTu7ysk2bLfe5wFoy2Dj6QWywHkt6rBsX4WaLN5RiX1jQ9iLp4f7Sa6A9cD6ZhAfp6nZN51a",
  "key1": "5yrQVgwc9wNzND3pyeCP8FFbcc48CXWK6LDvPk6zVGroxHhT5Q3TmUn6xMQA7aTALZaHAHb9eyta9CiCoRbwmrbY",
  "key2": "676f95Ab32PeiNvyC7dMVSL1WF8vf1A2MC6JmmkJxWnUqAPfjn9ZJvmxphwDraLh4ch3GFXVgNMj2ipp4eqC3GRX",
  "key3": "3s3cAUts5d5Vf11qvR9WyFh9tLSApfCSjEsod34JU9Yz1dCGS75h5xAUbEsHUWFR1QbsxUBxLFG7uoahSXKudmyA",
  "key4": "45EbuHKr94BvzaERoRmqHNpoBiCw3KjTLaxBDT5s8yWKaJdibfw5XsdENF5j7FGWvYutFZEzVwZHr25xhF3UFQY3",
  "key5": "3yxSdf4YsN9rDYF5VdpXdd3jpoQsBG4zQ6wCMPLgQpRXSefVBqXxGUuRZqcSr6xFX5LNok65h5Gxr2aUNTBQuaGP",
  "key6": "5Li16cLq28KQJmtW938fJSgLBkN5M8Ss59hMhRQXBEBkvrrfu7KP4ue2Eq4o3txy5PfAqwDSmsgMhEKLC7Xop1ks",
  "key7": "3DFKHi9ZJVMnpHs6xCeWoPpp57PTkJ6kLtQnR9msiDfawBFWoLcz6ANgfpc1UCN8Dry83JU1fEzghEL4vyWwECt",
  "key8": "3mRhXttiFvVTXBRVtyPg7fpPo9ZgGmxXDSEnaxLrNKXc6kWuDB2cPJBXAB4RaPW76fos2oYqB1H5Ve18vntS2p3y",
  "key9": "3a8uxEcowcrtZDVMbua3zrrS79iSAwsisqkj7HmJA2xLRq5cSh4h3xtUTajydYsKFRkyYe99yF3kZoF8XtLbr7UD",
  "key10": "49g4axCJm7qGbEyvMpQU7Z21n4udm4QwcbLkGN4QisDb1jEkqSqbC6wnmvj848Ff1AojNrZHahPpAiuFaTHsBRdE",
  "key11": "5sKn5VjFLKQE1TuctzBHBqr5twHAcA2oaahyqfizXFh6aXrcW6K6w2qfu9tJ83MTf4ALhDEpyhMNaBYoUC5F2SJr",
  "key12": "3JLqviWpQhBYcpCBqxGsFLWkZ8HUKXEcTXQEJoYdw6ZyXRdbBqFK82U7anzSPJhqJRqJ85vVaRhobC4aKDc94zEn",
  "key13": "3diyroezdXUnstda2x4JNhZiX6MfZvBfhFPo8UTk14LFRbBdDkYXuGyU3eU6dDJ4C1RLTgHgM9kZCogCnoJNMXQk",
  "key14": "4kCyf2hxeb7iyVsjQJGji7rAPuFS38yyT7C6GXRH9UovYFJProxhwTPynaAPj63YXSUj943ZBr4HUbcZ5tR3AfLi",
  "key15": "o9BKW6onks6VbqRBAUuLeTV4ZeqGbQ4ZLUWaxr5ih1w9GyVwsdgRi3uswJLkDDxx2j7jKLG9sHSZmH2bL5gudjP",
  "key16": "4x9A2RDYPReXjrP3fQ1Qas8dDCa1DAoDQT2boLZwS9kmge1yZKLuQ5XCa9dUqhXvWtAcqhhP1wydXEFK6y8F1bZU",
  "key17": "4LmGquzDbxcnwsv9mdBp39qtEQ6DR9WbYZ8uaHkqgNKQffDN6eWyPuYUqvgqUuSAWw8Lr9GAqCWKmMEz9Bzn72VQ",
  "key18": "5X8usR5K3b9Hkd9HhXN7dDBCWHx2B6mp5sn6gesCvcqt2qBzP7A45qB59h5bZCRHz3mm1g3BnWsTf8ngBxjAyMGZ",
  "key19": "vedzjRNRR3uNfitvuajLrCmK3wmvuap8Egk16jauPEVN947zXvt8RVbFsYrmryjYfb6Roo8ZH3PGiAmRNyBMzSa",
  "key20": "4Fj9pEE3yYVi3BpfBp9xN6gspdpv67bAS9an8av2DY9mcJgsA3TGTvyNbW4KLiNBUTotnTWy7ihrG7bUqofZyE4z",
  "key21": "4DB3wXQa1ch6XtELzcoYVnUSikFtbLutereFfvSXnY33mBvaRqveLAqcaewVvo2FuMeqK7rc7kFigezeLFNTkHpn",
  "key22": "4N5Zh75efoBTrCHfZFdXdZ4UHRVpz7QVSdAvwnEGBEHgQkLkyg966P4rYebyRqJiAzMsaFBzYKY7vKZ6jbhyie19",
  "key23": "QsKbZTu4GCxoNsWb3qaBd5x5GKi6vDztXbLqozH4AWHNukvvWp7EUoqcmqpELcEkfkjuzVbnKGUXwWMUBuqPeqU",
  "key24": "3uLno9L3dDStddMyxoKqDpm98ZqpiDczdtgwFZY4Nj8B7J3ZF2AYxhTj2y9pbZxDMFC61KCH6gfZjPf2xz2nmkjX",
  "key25": "2XBfjvzxhmHCYJybULKqQNMoJUTfsVXKg5j7fVuHXEv76Gt9kGLmBzvvRgGB3NwVxfoLtMFwW7yCVj2jDBaQSSx2",
  "key26": "3W2Cisdqqw9F8sqUSfdK5i31GCwiAmkaJ6RfdWpzzVdP5bW4Szf9NiPgV5T2Xzq185VEhZndb5dqHLtcapBNiK7P",
  "key27": "4vLjS8crJft5sCdbvXki45Cewpnq6NuGKyQVCKWtsyNHHGZZNDYXX7SUWoz5GDo2dxVLPeECuY5ptjtjK5rJTR7j",
  "key28": "5Ex8sJL5zenn7EAwHG8SHnjsLPqDFHgRBdoAnm9xw9VXjRxVSGpySc3FY55PEt9FBW9EzbquJsA4C36EPZAwmjCD"
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
