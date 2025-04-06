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
    "2cV8xAGD1wAfgdxHYFRmTcrjbiAvP8RSNu48ypvyFsV64bww6VaU62SGhJ1ahcJJ1RKt7UZWk3Pk5Syh1irmYBAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWohSTQnMuGSTXZW5vyjiADfR9PU8ojWLe2dgKKkbNZGEVmf2pzjuTn1XeT6NHTKBKyd3WJAemHFcu16xeP6U8R",
  "key1": "kA5k3J5kmVRNLTHgvQHgBtUm79MGpt63W5wteLHnHKiAa5fjBKCfuWBkWrPoERHUggJzjiS7VRZYLgp5cXxtaWF",
  "key2": "u5SPQxGZR6gtesF5QejrufPSRgwofHWAqF44a74LtXkLhKFgJeyM1dXXJwLvjNaSL29jJa574j1jsP6fGwfLdjP",
  "key3": "3pyLazyvSdXTUREkae2LgXw1xK1WUNXdCEUP9cQYwF8TpZS4Th1gs1523L3LfEZh2NxvGVDzKfXf7TjUcidnZx8Z",
  "key4": "319Y6DPAHj63gvKQ17YcTw8iAaadqWUdiFJXmH5TUWMibgFBLnAQwcCHKuXKhvLV4dpShHRV6wUoZvfvxG3eRWrt",
  "key5": "5EXMGaSdr3YaRvS4Fdsz63Q2LsHuZMJU6NnCaSy1ZCczFUECWDmYmRdwNErtHqi3Ry132r7GuygyZau5XWgDSYyT",
  "key6": "3Gc9JAcUXU8vJCAcMSQsPt516j8Hd4RboKtV2ChqLWYj7oGhM7rgh1tjiq9JUHof4tb93CGmzqTXDvdDpx2nWyqL",
  "key7": "5AnnSAWbdNncLgE8ntEnhdQwoTgfxsLmMY16nRXvy5LY4cgZgsHfdDPWYGppBGpT3kemrerooVcEAciS5mQzVmW",
  "key8": "5UaSnd3m46uC64r5d2YyCMXg8xxcWUBjuYkM7dWTDjWGsY7cZnX2RN7rRwY4vMcWCFj89vBGEFa8dvmbtRDkfPEG",
  "key9": "2bzNrCXVDWibjpAVY2CMPhDHDdWRxLfX6kXDdpnMsT5qsphjDU3YTAW1uLZcZjUyZcV9iuiVKbSFS2KMk6Vc9VmW",
  "key10": "5NjGK4hhNHWsg3Zf63LWmLPwk6w486TF1nhDoCUoaoxTTKbdLDgHDhfnrK2dqouxfNm5SCQWYU9JMmvUhWCpUFBw",
  "key11": "3xKAd4WMWMffcarvx4zi7pbiVDqbLeUE2XQ1gP3gnHz6yZWgLbNswgKfNUpFuRVQs2BABwPKYMTZSw4G9QAijwHN",
  "key12": "2oiwayTL6Q7PPKvXonj8xxZBzHnQtyLNeq1ZT7ribymXcBY1DgV6Jfn8Ed4ufwyNDdVYszFJevNK8omKMjgpD41s",
  "key13": "5RLUPZ5BDKn6PpXXJYo4n7EQYrsJKQ3RjT4JYfqToGi7SLTncVpkwHuBp2FWtBqdt6UAzvP2PbZSmfTD5GdWgMkQ",
  "key14": "4jE4aaXQu6eoEwGDR3dxnkYcXzJMSJfRLkhRywM7J7eYjyzD1DzhKvKcKqnFf5b4KkmzRhZyqWwJtpuv7pNhf93t",
  "key15": "3vRBribTerdaAhf8BhMNU8kgTYCsJRJwBHBXFr685zha8G1psiptxfGhhAAPkLhmKiip4XocdrSEpSQyfnuHDSyL",
  "key16": "3KAEdhJssn7Eu5fPU74mbSaw4PWHnb2hQ6eCg4azxTnBWTpKAN2vfzLXB4RiD8axedZp6w5oQSJvvzaiQcyoTpY9",
  "key17": "mgy16JWgiWtamZyN5A55o9ujunWv71GeqSrt4GNf8cqRNeReX5Z6ZpYVd6S7k191FksMSpTDBaDbWGo5e1uBZME",
  "key18": "2UXgMqA5garaFUmR8b7yUFy9svJRRHRX26SgiL6hAytPw8ueFnLjdVvdhiyGm798D7iMfXk8SwkAvcnJtpz2j2h",
  "key19": "4pEoktuEEZnqpnCeykJo193WijGWSXA8mtoQE3da9VTmznbi8cxpWcc4455dqSNwAvcNRSjxuKPzdsWWb2yw4hux",
  "key20": "51RSLfHxnhKvH61HTtJ8r346y3yEAXTjiwfWEnrFHGbDVTCcNw2NdkeuSnGeDgz3nci91uay6WGFDe74xCFMd4oR",
  "key21": "KfiyPdmFAKZn2VLCDBvov8eLhPaajfDnCPdBwLW4S4Up1xV2BKoKi71ZRPE4f2ZjWbWpxnP58ftND1NN12fARur",
  "key22": "4Abzmj8dYPos6cgvj7Gn4ftqozJEJ5KpBhuegX9RcFKSJHFxUM9d4HQ2F6p3Uc1jGm59iDbdMY5pR8aRqV1rmTwQ",
  "key23": "ksie83EK8iWXKoboE3qtCpoUSkik8fxyb49TJeQQn4Yx9U8jXFd3apayNbAzEDfvCdQ74SnUbityLu7USFjLzf1",
  "key24": "29iUyYLpeFRpiTeiBZp4nSq9qgPoA4AU1Pk3VkZU4TvZRAsDzFUJMtm3og36WtuvXtQqeGP3gP4Niuej4zkyCos6",
  "key25": "ef2PLxzqKpFsaYbQ7wMjq7BTypzTNE7iSYW7zM87LKYW2YQpHhVZ1HrHPxS7sjSaw3ijdJ15DyBvvu1vXZjiAgF"
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
