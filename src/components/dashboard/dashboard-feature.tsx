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
    "2RWYSd7RYvK5V1UzTifGKvAdA5dzDenHLfoEQQRzCpiFqXDXuuSsNm6bBDkcsqnc77qdhukvovyNc6GMvdvr2AcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJsss1KxEABk9EqiCuXebLazMeRYXR5SLBHgiFXUShgEpnMYSkwt2VxinRD7B23o7nXLpwUJjqUa4YzHtxctVVi",
  "key1": "5QhZ6wFoNLKTGjy7urKX5oaDwgoStTFhyiwh3JCW3drSuLnKjEohQt6soWnk4tAZVmVb8PuRNYqdsEwF7h4y3p8v",
  "key2": "26PcXvRDWKXkZ3cCRZ9uf7ahDi7fPqru9mVqouGf1vBEip6f5XbBCdNQzTACKU9tAzU6CTXCkSnkdmofm9DZf349",
  "key3": "rTa71oHdLES1NCj37p3TboAubokU46AR2otzGXmeSEJiLu3r3FYFZa5Bi3XNQbq6bxFdjQLR3bkpwWhi8rDX1wb",
  "key4": "bPN75LhQNp1n3icenRPiuGbDdfyTxhyJmiJuPd49AnxumTS9rhyw5dtKZQYtq4ovaQuxoEtHS7GQgJaD8M1j3Ef",
  "key5": "2AkaYuVbPAoPRvBhVZ7WjNtPAydP3Mk3YPiryMScvRRpzN4ji7hRXRjza2o2W2hvFgLZEUMzakHSm3XUoMDtnUAd",
  "key6": "5rfm2ZvXZnPnhoRyksZQBMoqPNopfGi579qfH6ZTLXndCzVBbd8iA9ZLYeoHVLdacL3fJGFehn1cTdzGefaApRST",
  "key7": "3rvCAZgiysw2iNEQZ4kMRFPSN27NVem9T3RyccvUgtP4bJsCN7N4zWdjvpn3iAxn7KsyFGyf6UPHkNxqLds74Ra",
  "key8": "4g8cgDXcny7aZ8pxVQtC1exDUuRipdPPH8EX4F5WueL5kH5bxpwxiFKSpHeyVWfLXfNn2XU8Zb6mXwvp5GLR64oq",
  "key9": "2DhoSG1J8RaZLB59ZJpQDv7BBGEmWUyEV5hechYsopBLpFZcYKyrAFZ7cZy6rtAnaWiSAcei7C3e4Vr6C2KkAMqz",
  "key10": "5HGpz88sYLnYssqwsX7YHDwsGRS6DSpCArjN7gq6cqXvWFpW94Hv5JiW6tQkjDRtRze9iTyPy7k34eWAi8hUfeeL",
  "key11": "5nkzyFeof9DtefFNEHBsXySsmdWT2Xh1DFXAsbYFSGNFu2gGs6M6EwuW37aU8U4wtFNadWb1tP5Jz2DHAqASniWf",
  "key12": "4i8XLswJyKo3yzeBwpodtc35H1avQ4N1XBepGeKgFCnoNw6HJQadVCe9oLYHAoAeVv3ymFszQJ52Mi3qayPPGzao",
  "key13": "3Pcdo7hoPaZKinmeVrUYbJqXB85xay5d5PecrkqnDe8EzPx6jxi65hkFoA5u5Ua7HHjAKf6msK9Fhb6nUicq3hbT",
  "key14": "54vC5weuQRYHkVAmS1ND7d17ziVFk2pUwKf4wR9CpXySyEpHmWmWszhGhLoZwHi8JcQxtYRk7y7AZEvKiG2UtkSd",
  "key15": "2n1A14f3rQQpBYFM91Jraq9Hi55uVvwqCDc5LJmcSmScxDVuhiHqc3gjQKmNsoabJN7nzQvTfC6bu7wSu6xQpTPu",
  "key16": "2ek4C9XHbgRmDxHYRJuhbJhntextTBn9dksq3hckXhauwbbi5RykwcZHvKtUvjL2NszpzC3tebrhFUm8Av1ojLTa",
  "key17": "3iuue1WN1CedCJDD5HRnpT35Db1UN3Q2tdPLJGDfboRY56JZVeij9Q6atdVuNGzd2DQz349FXTxjfrfUd436JBEK",
  "key18": "5esvAC1CMeKdvhVNDWxkTsESHPtzJAmw3XgxGaZNp27fsA4YdpJJLgQU92h3aGBLtDum4exqCbfC6RVPyQx4Djyf",
  "key19": "2Wfv1ehBamFt1yZAp65zSV7srBk86PBz6dbet35kWXF3DbcuKiJA1bKwB4fPG65m6d311ydPoXQEpkE63cTDAkf5",
  "key20": "2gWgHKYwLb4QoaFnz6XwDaBDegdZbLXwdUPc1RphW8MkGwLKwp8rhGS4yFMEaGMrLmVuaL63rMuG5ib1sPaVPmr6",
  "key21": "58kKw37ULNn2V3tmKxRJDe4uS8ay8WkrPvB7dn1RqQoHKVnkeaxVcGNSkY4FWHYTFJ5YMcSCMwMZXRNUGJiv1x21",
  "key22": "3dfEfKrBzkdMoCgeNNH1TJwp3SQiU53tRi6gTqbst6NY3UqvHfUH3vpfLdBTojsqSpWRp52JoVKb3xeWZx7nPPxC",
  "key23": "5T2NB5BVjTQF6rdx3wQoNqxsQFEqKoRELLpPPg3WFGHQpHXZLHGgLc35SZq7URsyQxVwt2ZSQeuxqVWT4y3NvR1N",
  "key24": "4zybwszjKej27SfypZF8uXCLEJf2rLrsqhcvR5XRGsax8xMQerP2ZKdXxpu2kH9DRrVg7byiGnKuGK6kM9CHAtRW",
  "key25": "2MDeAZcnHAM6qmuwR3zzT957biYDakefC1sTFCyf81Snkm5JdxZv4RMjV3aDELgmQC3VYk9CCkQXosUJWCKQ6xK7",
  "key26": "4jZV3U5153B9f4hhxjfMJk2CGroFF7cWVTqZ5yocHZM6PfjWnhhsrxsugmDjaZ8PysKn2Aye8YDmnaWmWvhBypGD"
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
