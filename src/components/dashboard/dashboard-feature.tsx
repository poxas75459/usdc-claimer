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
    "vyLjJ56twpAP2aXjdLpL2bLpy99VeJ367JjFuhUFD1CaiuhMzZYj8XinqPsbVXHRpvBK22bsjnEBNwqAtp77Jpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xhe9sSwwqfqESGnXxbnhZn6Y5HiNChzy22GC899TkRMjwr1qukpJ5UvqpkLLmn3ZvJz9CBeMretA6LjKmkJvUwa",
  "key1": "pxFpdKdUFmi4uMTFNmRK3eMeCavCZX6dugeLR4sq575tfyY2TXqpk5Dh6xoNAVwMk6Ste1S9MuUqWv6eS1Aj9Nn",
  "key2": "2pjGYbxFbNav1cBNgDzX12gawGk1hvnnjqnLqdAyLugfbEJw5sUA91He6qqt3gBsgigzVhDLMsmUXhvxoFypke9S",
  "key3": "4SmkHDfPZHxDQhK3nbkJd9BqZoKC6tky2PhP2f7XzHt8djxGTgFFdwKYuJCS41KeEJqkNxvrJ5DFztSeLoiLZGHB",
  "key4": "62djrgsyPLkPo3C5EjmSfgc2ZYYyiYyZ9RS8CvQurgaRKLJ16YZnYa6dwnzzT491n7aZ2BpnPYRMeJfEsEKeyzPu",
  "key5": "2LM5yX4vT5YMSMNT9UKSrBgQxJiCN8haMBkU8DHC3ziVVynvjS5TQbT5jd9vqbv3wHC3GUSZPTzA6QXhJbfk9WXZ",
  "key6": "2ftppUHc7wZh2EbYPdRyeSeChroaXrGdBnRd5azfZ2P9AzXAFcwgUjrPnE1E3mwUrF8XrRtu5vSerqgiZrwY1Vfh",
  "key7": "4e1RHc3VvfJvkWtJa9DwARCPt7YvXpeZ5MY3v53BUer3E29pLttynLKnNGViCviYantaaYoczKF14aRScyGpjf3i",
  "key8": "4L4TNHLVx6KfdQReXZUDMZmcePAYAwHYXBo7iBiwcNLb4hF5fkRmM1n4p8yvU2vranPFoPuZp4t2haBrkWaWxffX",
  "key9": "FmNRGaiHp1PcyYnNvBMknLhMcTLKoXARhw8ys4R3rmcwAtuHeDVcKTcuaNq1x5SEsbdcJWEhQxvDeBTMGgX4gLq",
  "key10": "23uSJWuJaY8dn7hZasQQUgWsLtgenu5Sb6geW1VuhVLF7r4keBeVyijraEhusQDhJXLokS6BD8FRVeSzbMofx2yK",
  "key11": "Py71ng8Sodgib6GfasXg23NSEznPzHgcbJKpYQ19BXQuWLWAd4YzkyucnSJxNch6JhJ2WhxrS1op5o4bmi6caiq",
  "key12": "if1QdJtLTV28qw7mJHzY7FZxDJeXSVKbJAB2cC4UiaFoBQJSFEnBX6aRHXxzeCaTarMvLywf6b8z3Ybkb7umsKh",
  "key13": "Zrs7mFANdF1hzVUh3vpDLFiT5jLyjfdAZiLRKZ2tRGSSDszHtFEhL8zXtGmbYx8x12A9JVRmhtU876ggpn9afeT",
  "key14": "5aoLqvdgMd6zcCA2gTxt1vGCQDXS9uWYF8i3hfFzzmj6eDd2DPqdRWAeTgakwASocJHyTziQ6dSxb5xdTo9zyEpj",
  "key15": "amteepyYDGujkzE1jhKxVKj4p7L52cQB1HnNEdv5VLxLLeZ4qfesFsDWszr74YT1aBKPtYTkCK4MdxpSyTJEooe",
  "key16": "2DiVYQTEv3AqackEjgE9YaRjgeouZyPmP6NbAVga4oYv7kNfFvSyT6Q7B97t8SxLVZgKVDfcUBF317nw8XpLUvkK",
  "key17": "26GzhbED1StXBuijsjqun6gPotk6MWEBU1JCqxvv4u6DRRiz1tiFhV1RFGDt3YEmss2cCoPkX1E8X8L1GsPiSkNc",
  "key18": "5MTCoFGtjpKXaw38opraJJBgwmvxpWfrYLSXcDoST7gcinoy6PpCQkCRkRpo4LkK7FRxTgUfEKY8CxuG7VxgZN5w",
  "key19": "2mQy3GgSkytCz6o28i38KML8zTz8VSGjyRJbixni8L5y82WsT9Q8nGNKqpf37ao2iceCo7CzKyH39PPCwKCmVzUC",
  "key20": "5mA7J4Ni9uzPLdMLfxr6RxyNje8BWt9JhRJAxyoQMsBH5iGp6X3GqmCMezBE5wTL1aorfRGD5SDGpJ4djLvvt1D3",
  "key21": "5sSnaCQZNWA7ZLoyghngA6uwL85jAxUnhycBrCGfzLUCt9SAbdbGyniJLnqULa5yHGJohWd7MfFwacC1kQuJ1tT4",
  "key22": "3vT4HQGjoXkh7uy5tNrkuNn7ZzwPTV5JCDQiR2Pc6NCSNMfVSk7V5XbF4FpPrCXoCfhFf4rULGdsV8ckABWLXvgb",
  "key23": "32wZg1svhTtFdRv4LEcHLfvAZJ4Yr7U5JyF1uhSoPJBgXvL2bbVoz288KxMXjygTLL3ohso1GB17r3MDfstqo5ZL",
  "key24": "51jN5HnjP6ZwuBB8Vkg6HzShpHEf2SSph5uz93aFojRrfbDEPfdWnEzfVxH1wHhQVp5E8J3qtzPfaX6bNNHrp1Ud",
  "key25": "61L1EQDTmsTh23ZwjemzmgNEq8MzWJkCPwGStyXux7TgvrP95auSLzDq9iTB3oQj83tns3Hyexn2zBmyRyfq2SiV",
  "key26": "4RheJhg5ZMuzi76XeqdGgJv6UqEMbWCrf7tCZaMepuTMgs94tzbs6mC6JBJm7Rn1kU4qJ3TD8LC5kLLHwHFGEyAC",
  "key27": "5tZbEQrRxwKiysruWr3eA4jRMwKQKxb29DnCAQWR8tKKZ86HuaNzvk6dGQce7ZFe25VSYyKZr1SDB48dgDkQfVdF"
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
