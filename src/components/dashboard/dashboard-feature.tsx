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
    "4bVNAVrypbmcxzrrnACZQPUbY7eRru7sdT9UjK1gSDaV5aXkmEQWbosPxyqujnXDPZ5rMp2iCxpWqVrQYQnfYbZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZQo6qfH3vULFu3Z1kgx2aSLanhBcHg977ZpEcW5dzUTVp9Bc6iLd5vRCaL22drSKke2uRuu4pijY9bCEuopmBZ",
  "key1": "2n1QYoWM56yKqhSMezDzCwfdPS6tc9Uby4s9cTWDABFXunzPmUXJaXuy7qwmUgEhnkvoBJ5bTwhhcXZLu4dtVMdd",
  "key2": "2dYzoJdZDC6PKaFJNeGHWM2zEBVxw8XHBEd6zeRSQWRuF46X6TwRga2SnvksFn7o7wj7cydoT5BCHCmPXqy3cVrv",
  "key3": "4Yskko6ESAAzoSydGHWzs7zELDmJ6rHwzPbkLSXCvPMw8qkpbdaSQYJf2EBZNjR2L2TYP5F7GXNBfXTB7BHE7Byo",
  "key4": "2U6SoeM8SwvyFzxRYixC8kzmpRDyv2yA51rRabVhYB8srjqiHidNpnwCUwnyfyesdwqQsa3zgVweVa5mwuKisRjz",
  "key5": "2DK3A7tR8XwuUr7s9VrXBkTFVT2tcMyFzNqwgeY2ycm5V6n2zgSFkFvVWsoKrQ2Y92Vxmp3GrATcJV2WTsYAUjdD",
  "key6": "3PC3cCRpuGaazwf1khLX3QVCqnTv4n24LaCPZAKM1EgduUPKJUqDqTsouJydscgpJzKyhExued8FLfz8n5WPCYmh",
  "key7": "5rpTb2SFJ3GzxQFEFG3TXtxQ3j3CmZ4c697iDPurQFuskczMepvTS1XtM7MKPSHGyLyt55sJ2rsZgCMxw6YyAaf",
  "key8": "253uQ3gjgZwfwucfToAQjPhm9TCdSCpzbTYdYJwY8QJGyUHPX6KD2Jd42Wx8oTKaRipnh3HkfCvDUxmQbcuEkg5B",
  "key9": "2uGd5GZgSSWVDnjNtn8m38HQ6At4jVKgtA2qY2La7oaLCtacJmQ6BcKuWqdso3FgVt1KdWrmYpEqUQVJpHoQYXs",
  "key10": "2u8x7uzPPPWdoDAvJ4arCfE7d2owkPjokTbXDq3DEvUWXkKNeHjHr1fGzDXHvz6xqw4ktYniBpGq2ujVzXRr5XxV",
  "key11": "5rViguU8s9EPtFTE7kxM6rmu38Tm3iYyuDobpg1EDebw4Qg3669wqLdkm9upkLc2cg8oi4rQ6vHDXte3sAS5AgHm",
  "key12": "4yaTposctkBY7vaSsfCiWhKuiLBReR7YUvnV2XfhycMd7sizeVooSTcd7f5JPt3GGbPPiwH5Ac3avuNxBzKTzkBJ",
  "key13": "2pWuoNhkN5paK9AcH3RCxYgQU6zJrqfgYcE83npwqFzMXdHU9yn8BDZX8fsZ4dpvRcDVXQbKEnAMadNiaGX4vrgr",
  "key14": "6EafHi9Ch5aG9UBuLvXMcF2zxCShT3oSRmGnmUTENmTYXiooo2UTNPEau8oWoRk4JKfcxZgSCjyPyYUgNHM4hkD",
  "key15": "4LnC1QpTavJHxyhDNsekenFZeE4gWdvMXZybVys9A1ngifnXvhRwe8Md4ESaCBPdvUtxUwBGYPo5ZoLs8ZD7wyVa",
  "key16": "5chNGJUKuLWSLa2NHDW8kxzdmZZpqgRGdXeSATguHgWTqy8yasFfKcdXjyexxcX3yt1Wey1khq9rbWepe1evYjKv",
  "key17": "xVVjHLHtT5E8coXUU14Xjcc4TD6JWtkwJNy3yB9WR7h3eoUarv819zVZK5pbCaCQdvtP6adMPGVVN2YwFQRdniV",
  "key18": "5jKYoCiG6Y9Vbyq3TJj9fyLVjVK343n1nGAbrGgiZdSUnNsV2n8ddCPF4TpDoeArMTPxVwPP817U6H34rcnej7q4",
  "key19": "4pUGh3ebTGXGvg3HjEDfvUpRk5jNGGEiJ8TMz9yyCRjH4qpr1yygmRzBEz2hjzECfnWTKhxZ1xKX2CxREjENwwny",
  "key20": "TfRP8p9a6j3w4LHhzCTRkuWmKgubsRFhFGTrt8BapYrA2maa4CeNqxh8H4aV7T5NtYBL6YSBRJStaMjSxVs55CV",
  "key21": "27YcX2jiWRrwySehMqsqwhacbMsJSnTt5ah6M9ttZ1gw9rU826bb7Ta64sgxYmo4Dc8UwwJ9yF6KVZPTT1XbrmQz",
  "key22": "3x5yfay9oS8eVrkNpbmmmaYjxcNTL8f3Wan2hYhLe2MsDGL53N7adME98HEXKUZNJK7MjmzQZ6WnjeWmc9ozfDW4",
  "key23": "2GTQDYVYBKoYQBh6ZxME34szkC9MpZRyjz8dNbJNEQZY2cWex2L4Aca2NcqzbRkBDCquanqN8oug2nWYaMf5BSt1",
  "key24": "2ZzG4TF3bNeHv9ejY7BLPnByFLNVwodFQ2C1qnsTRTfeJuv7Xef8g3Jcao2ABiDeSrWjzyFZSKN8KsZn9dVcstKu"
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
