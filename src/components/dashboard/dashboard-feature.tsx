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
    "37MMiZHJCRN8KDBCCPL8PDetWrGZa8qLaLJdYAFPsuJuzJUyZWSptJgKmTesztqowxERXV7D9bj8sJXtXPaa1czX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E52inigrUy2hKv6UByVkmeVAr1qsHLXMKNNborrAqP27rpDbuh59vaSncHrnFYECZAAdB72EDw8e35C3d8kX2Qq",
  "key1": "3CBorGRehgbxHEWhUqMipjz54rpejrDUucCXSknf6sfSHDshqDcqREym3MxLYVzqLjSLcB78nsVjKKhYJAbjsVJP",
  "key2": "5QP6coawC6dWa3ZpXnmY3nco7thPp1cnsJUE1qXo9MqtU8AuuZpJDhJ3wZkgdXsrg83THs3L1X5uzJ29Z1Dqadvm",
  "key3": "UDcAyS6mL5zY89BXXm2shWC1ZK7gTDLbG2nmLwi9vLfVgyph81U9QrmcCR8ca7YPu7ABKwmZHTpuytUV8Zoodqa",
  "key4": "47bAa84cYxRmpbSRk5cu9cdmSDfMyWdkXaSKRq3hhUt36skyGBpv6waVbcgY5akpw8CmwaKZD6FpdUnPJAFe3KMK",
  "key5": "3FzoK8V17acWsqGaa4tqLmPFgZf9RFTES2HDBK1dwT1Wzji6ar6Qsder6nf3gzG8EwRwHHvrjAY5c4WmjBhBHdMh",
  "key6": "3cmRj7Xx9bTGG28Up9zYadUEE5nd2KRGZWBeZ1h4nprShygnZd3VKaD6ZDcebQQkrU83F5UgJZfyJhXAoRWgu8es",
  "key7": "3ase9PKdTgXhUzwkhFSWCmgsU8SSwXRVF2ACA2Nnd7xVc7eWUqfieDGAmX6SHN3D6R18QpAwmfz4MkmofveM4zn2",
  "key8": "q5x5EVd9XoT9LEkhmZwtmySy4MZJLfzbJM2unHzsjXd4G817iWsdwBfxF6UjZdru1UatPuMigXkRi9sfuj5E1Pp",
  "key9": "2uUNVauSAmXiTszMDKNQpoV7DKrRhJFAUeGsM8Fjk4Jy5h87pAJZy1WNGUspCqJPUjcTyCqGrAuH7CxborxZ8xBA",
  "key10": "4TUGTbhdX1HhFaNf8RXvUWdFrBgubJ9sM5NhKLpAzcHZV3jLvzQo3dXoF2nSPRQZWvjDzLMewFZbWvviZgjcPRoW",
  "key11": "2UA75wG7YsT5eSXkV6jiQ4FRy7CEHEmkwc3e11P6uZ8jpauFtjdphcBfUyoV4rxPJx7JYZxESeyqTbqX7rkruGME",
  "key12": "MEH36f5cQAEcaFuUYcCRZYcyWzaRoJKn76rDSwzfjuqZUQTN9zT9odd9D1TJdoDsU2w5sdcxtWsAAh4XRtVYCCy",
  "key13": "udRmB5dzga6oVPWDJirXHReoTv49gvhFpDoqpXiL6SrzHj4m7TJdX96oYdKuuL2D2hEBhaovGMtFo2vuUrMkGBM",
  "key14": "2ZcNcq1LzfxYDHZJWUCh5fGbSmKsBZUFX3tvkUvi2gECSXkGnB18DU2wrFJiz2HuK5JMzTcVSXzLWcW8NtAfUEBG",
  "key15": "3okkAysXA28qjyeQKANcvQzV8mpp7PTxiPK4pUq26rfzqWHWo1hXhmnTr36pj4uTiG2kqEufKYFuPDCnyfr1EdFy",
  "key16": "3Q7VecqzKJCo6LqVetn3UY9nQtZGvd3jmvNnSpzK46ppdbcRF9mJh5WQq2BDteaw3CtwYvicrHJZQwqfYq7qzoTR",
  "key17": "2371Y6pU3EhYit7xW6UKuyQbYVRRbgZMABL69zTrgnph5Y9gNyo4THdMrU5MD6jZoeoaoPk23wkcQrLmifXej4Tw",
  "key18": "3bnNLf3ZL7TVUZBHeYSD2v2GSJty14yyXXz2thQbpFRicDEKB6uP4Zp6aCPzrpJyZqgSvmmbdgmdX3crKDxw3agD",
  "key19": "2UJDs2Bhws3L4zRdyz17cCdxsofDdiFWXrsGEqiE1gKGkysKtQxCsqovDAGC1KtnF6s9pqhLmezifJgC1CnRUKkr",
  "key20": "5QAVP7zFn7r7v5vXa6yRCNQCuGrAG6zPWqFLAVP26Qt3ro21FQW7A1mXNMLBgt4n8oEQND2g5y62qg2aqqtDQLPH",
  "key21": "3rd7tNaBuc8JN1YxWzNy6PtA9KZxRTGpHSNtCbnxibE7GvHoSqzmwWt7w49PfGrbUWjhMZGg31hg9Dz1MSo1NFiK",
  "key22": "3UznxkVc2QZPRUSYsoBnFBm1qwBdziiTLxY5u1hy3PhmicezHzogjEuwuUoe8A5b6uYJa217R8kcBZoyave48A2a",
  "key23": "4wbFyxguwt76MbaHzJaxm4pQdVtLV25XdxXhZUuKzPhhF3EJ6t7NkydMyZGouVczww8JVrT34NL5bpZnpwkTUeYb",
  "key24": "ctD9BuBMsFc4mH6rjSP285yCRayJd4zYmsccoZjyDtNHDioB71B9u6ZrNrkPxbd5kF1nyhT8ocjcYxkjUdoUgib",
  "key25": "3VopbjuDyewiCGmn2X2P971UY3XPu1GTDXxA7T78sVVXnyBRp25F4x41VntpGxgcL7ZtvMzbhJFQPiWjh2mYPZAr",
  "key26": "2tXhmyzXhsBGfgQg7mbjU3TwsNK48CnFyXA6kqLGj5vRWaBE2REY6p1hAaDSJ5GhV2cPZ8t5NwTMLrV6QyCx1tmx",
  "key27": "4LaZ1aTA1UYRv31a7kxHzh12jf3bk3jtFK2A2YUF7c7QJGD97tKJSRX7suuf8JnF5wLBXAAzPvGS5yWKR2hKZFdZ",
  "key28": "5wD5W71CYkYbtsXSqsiR5k4Vkcg2WmMSvr3r9Po7zQx1ZLSML5Qo9SST27DhCQVwdMjvfZW7LNC1V7eE29yKDj3v",
  "key29": "Nz5UgnMMQ7s9eeq9DMjD9gdhpLFqd7kizEQSmr8aF8KM3YHX4UH3WH4pgPi3gWczKs3BJJANXTjdj1UTWSzhjQd",
  "key30": "2zdVCi3Sn1fMw5WuLbqmEenN7XmtD9EF3ynxdcjT9EcZKzwYRAFK8DQNSXLBV6XDhfRRKqdGGNYyZdUMnAnfNtLS",
  "key31": "4jyHoA2zwvWQMXgK9BV6jUFJtXKLhA6aSC3c9cL5f3Z7Gie1drLhBVHGBtcdn71B6yNnTvvJZewMFMjFXL784rdy"
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
