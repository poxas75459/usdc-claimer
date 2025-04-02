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
    "2acRGx5QDB6nTjxjQ2P2QdmVy7CfQsHUDG43rthEnWKCceUYMe2y1FYyvzYSz3CYUe2hUdJA8PojpQ5FshiV83qA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMx84s1P7AJohdLP1j9YWuQkBvWSyCR4fGs9oUYfvx7mXBLj5rfgVhXmRd1LUTrwpQUyDszySJvggMbGzawJsMX",
  "key1": "vLf8YpSHwAjYZMCsuqiQsxqVNaVTv93jo37yxBxyVuRFBMBGEUiURjWNr6amai6rchcKwuU2eFcTmFdrCkQp34U",
  "key2": "5oLU6dzoiiKYV4pG28LB615dDFHVVCvv2pfAqFSUZYgFeubVTQ2pMYrXHgRgnmyMMFWzunDCh4XeLdNHmiGc7WNv",
  "key3": "4PaF78SiUM1HY3sZUiPVFw982mZKan54yLiRoCbZHySqFJbz96FG2ABEEZ77XVuZd2zg2yYD9Jt8FgUGvrdzdhCp",
  "key4": "4aFxrXCqZ2D31mPNJMNcS7VWvi2JdvBBmU6rLdhyU8wHxqMqmJ77evKv7wJ8u3vtZgQVXw7tVMYR4TxZCTBJ6Ppc",
  "key5": "3ww3rRGogw7cJgwZf7ADF7bho6hvwqr74NGGSakuAYuM1F4d1qCz61GyJ4co3zHe1yJXGjtCfNZMN9uo6GVMazCs",
  "key6": "4JtQefgHEEb6YpnzxWvMuJ1TMhataj1n5M6gTQWBqJUUdc44VhRETrPQNSxK3Hbpjd3dT4v9of56tqeXM5h8NWLs",
  "key7": "APQ5eCboBy4FDG5SaF5X9zUodwd5vLFE7G4iuojx24cL39xs4mTmdz7GjKfKFfNYRJtDm4iUfuJmadfjYDuovs3",
  "key8": "3DQfy3KnnJKZFZ8jM5eRD4b4C3RqfHXy87eEGsxaKpKCb29Fmce2r32VYLkeLDzMRMQb1ceS8AozbvdBTjqCHBas",
  "key9": "3tXVFUKUYKUsVGCoATKJEv7RjGcUG8xBWbMMv2BKnLhS7fJxWRWc7yzR153HG2mEvyBup3E9rGsiEXRLd2Lo8NHu",
  "key10": "WyC1J777pY7FwSgZ8GB4wwNyV4d2qEAXsyEG5yyBFijZFufV48xQJW3J7QXDzsPZi7Jj8iMG3xf1SGau7bDDSyK",
  "key11": "2ahGnH82dmUzjvCUKa3WZ796xg3RCLFMziYY4WE9VQRHtXjBcpEgvwy94LRmW6fjb2AgAkvUympUaeFiZDaU7Yh",
  "key12": "48QbFSYAT6M9kDM5KciW6JxHERZnomSfoeQfCikLhBMQgc6mUHK3d7qUd5GUWLkGZ4rRnNYU6Cd8yp9wa69xTHwn",
  "key13": "2SAbVB8Q7Q4mwCvJubrsopfqzTJfV9KKAWeFrJdANFvnurahcfCK3LgY8yf14ZZnP8jFr5twKRvnoVpxoQEna2bU",
  "key14": "4S2uqc6QvMRJmvJChBc54vUAqtgmP6rufLxM2H4bQnm1E66Bitx7g3Ym8g4QFwbSZVecQgvoa9SGLFN2uFVey2dY",
  "key15": "2VpzDoZgRFGFHzdZf11NXwRSA1v831SNFxndG6YdkPFCjGGJcS8qJTFK9GWGsoXmFNaofpc2UgAwvDHakR4V7PSt",
  "key16": "3NaDXLU44QuxXxfnTPUbCyVn99yTWtZkYu1uVwZdLsPYj9N4MBf8wbVdbXM9J6xSRgh7vChueLrqHe8QpSWXeGra",
  "key17": "zWaSusBjt8hnn6FN89mPEnMZ4c3kQxMYxFXGwf6EQ7W3BFQyf3xDiK1ZdErWHmRxTLY9fDCAHnwBsCTCvUPr6Qs",
  "key18": "4HXmMvPXD5HCJWe9MmmP5nAGxxYUmZwGjykzbM7GB9UuUoxCGzAJ5vQekDb95peHD7QHVKAjKbdvSTQFk4LywjBB",
  "key19": "o1JkfAMHcMwgWuBsPbNo2nBJeWUHweA6QkTHazAfi9omxrre7fJZ2qrLXE256wt9jdRgkwEQRE92QobfwLP13kJ",
  "key20": "2fpiWTEfe91TwF1pByQW97SREevw2AyTZrJf1ScpSh7wmcwdZTgbTr4KEYFkmMkiJ4YFVAAdgrjCrb9EAEfakGiT",
  "key21": "4KvG7HEP2HER2FK1DDgjRH8M7qWcbmSh357EufoNa7SpEVm9FZiCvDpCsSKqPi6nnSvZ97mdwjmqJirbo2DqWEvt",
  "key22": "2bhQKwvei8uJ96zCHfY9QZyhXFcg47ihdgWfsz64sM7kCaWLDMinEwSZtsxABnTdZT5c7RPdwd78xs7TcvDazYMm",
  "key23": "2MeX7SKfr5ZSHTY9TyPSAsjmu7EMS8vfVKABp1Ug9qhqhsRv5mkLU6naHh7MXBQzjz8U63S9p3EF3v1By4dvEBfb",
  "key24": "53BXDPG1LZ1p4yffVWj92Pr1QgGC61D7kKBUb9C5GBBpn13fy84gBZDNk9uKDBb2N4Cdoa1zys12wNKsfYNpEzSY",
  "key25": "6ZchvaKviuYy3Wf3UapxpDLCfd3D5G8xEJhdDed5EvvUJ23AzygGELX3f3Z9dVcf7GfeABkrLqnPx3oo2XkzFaV",
  "key26": "2CWS64oJz153AfLgvU8S373wmiiHXokm6pbKmVG4rZ4cJovQrwDdTnSrNqoAVhR9hjmA4FxsZxwdb5ZCYjjwRAJg",
  "key27": "31rWxMGwZqVWYp6HFMkKr7fTKDhL1Xbpv6rhVSdHw5sdGJ67XM6Y3wdRJ6Pd7bZG4FQkVNfC2Jccok4pWwDMZLJ9",
  "key28": "2o1qg1amgchG82AHHMjfsF54ebomMKcwnAXN4V8dyuqJ2YwXEht8eWgxZAYLfd3k1yy7jnhFvD2f4kFnUQ1sYEZ5",
  "key29": "3twy3H5Q6s7ZhiuiZqfomvj3dxx9QKuk7tyLjT8R2p2cdC4wHj1AeY46txWUsCso4fqgmsqkYTG6pAfcrNSzwvUS",
  "key30": "4Prxkop7jNKvEig1dESsCsd1JWykpYbtwEKhtoXSfLfE1QQN4n2LN7BVSqQjxVexoARBgt3B4cJCtwJda16Dj6j1",
  "key31": "4MQSeU86D7DyT17yyGP62wMW5w947mgis84J5paxogYz41oN5j7ncwHMuUA3dcBHnxzLz32KaEitLMkGNTN1U6vt",
  "key32": "5CeprVdjEDWrezzNMaojbtfTh7hT1QZYCSMjTDwFH51JRqZQYzJEfsvbjnYg2DxefBDxzHrY9eSjEfRmr78Ss7Zo",
  "key33": "38Q5omDPZhqUaa7YyZnQqmfEtKZFKRE2T6QswthkLpzan6abNaqD6riQgVs6JYZXkF8sqK94XrCRUXvDJhTdC8b5",
  "key34": "3D6uwpMWQp8qsNUoyRbjkjHyiKzKqsbXywKRkK8r27zPfH4oGKgsszdXZE1x2wpsmdfTGsT2kHVFDJrY4N948rJt",
  "key35": "5Wk5V1NJsfLRVRHgawGkdnh13xmXbTjsWje62CcwJh1pHeHMLqbWXQfc46h6dJNRd7ExUZt5wHdeqc63ooowPaB5"
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
