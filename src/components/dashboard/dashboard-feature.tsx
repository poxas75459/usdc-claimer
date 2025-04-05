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
    "42zfTNh2u2WeTHFbwtdPB6fJH3H6LWCwtAHxez99tfnQvdKAreibc2odQCBrnDYPQiforKFVDsnNMVSpHKMbvbFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McbQF9zWYjXa5pnjffJGKcxowG2ZdxqyqDBBvKfaKRpt6YagLpTNko7LckHSuNr4y8L3ykwXGiEhVKwx3SeK853",
  "key1": "3X8cX9feYqWzsq26pzsmAUoHdcWEa4nAVNaRmo23ykixvfuGhARMptV2o83u5aTyTJUpHKdGeikQmEed29f4NNyn",
  "key2": "3LmremcTEPwm6Z5wDwLjJFwTmUt7HTtofwFi32oZ4t8YY1KmMwJd9W4T5oGaK1vh77nB8VahESrpNfUsH3hx4DZz",
  "key3": "z4a2mDXApF7nrj4E54zajtece1MGj1eW9tvmPaUPHgZ53TvwxJLHxM1gDJCLq4otWNrhKfiQ3gMtr82XHNLmDZw",
  "key4": "ixJJnYKBgakuZrmLrtYps1eyht4QWhkSbqu1EfFuLr5XfumoYFyRuZNgPRZnaUZPsBW5H5okyepo3D8SyV11dQE",
  "key5": "4BC5x5pHCxqAkKCtVSKxgJjy3xzpYCT6MBqUsK34PGmL3S2oEWydTjrwnWbwpHJCQX9w54NGa2fc1Ty6ChJPpQQY",
  "key6": "2D8858c4WZmwEoAXaxQaMgoEi2f18g5tPGP9SKpAYV379f8mGZb3v8dZURHqRm3ZowWu33h7qoJjBk6ku2Z8bwkq",
  "key7": "5GH1PteSUEfGmb61TmKQuWJzh7nKPg2FuFu3PznRZhdi2NLXTRe1ExHqQq9ucwhCwQMP1rZwSbFciYN46ZdGCENP",
  "key8": "2UcqvFRS1BxHxMCXHoxvwCnQAwP2y3zkHgJf7nQSunzbeGVYvx16LJ9mn3gBHjiwWsuknfpqrENWrztQHrGzjHDq",
  "key9": "53nKuVHJ1881F2v7XfLgxGhWgeeuM48M5zgfEknyiN84Fs41cPjUCYJKALrcyvgUn4zwGaQAgsGgQP2cLUifVNSE",
  "key10": "3aHsmEkmmEjTWPownm3YCfKbKf7zooepXowEPuZUoz3p4AVr2DnfwQadVMuDenSHjj2P1qpFWi4eW46RnkPE8rT6",
  "key11": "RkaEceF14sEy1d5r3ESTqrg68XoG1cZgcpiSsHeGAiaTomJHZgP3ws6KdbCJBzgMUSZpt55wVpnnwJ9yaFqN6fv",
  "key12": "4PGfCmQzoxPa82jZ9zQVDddSjZDiXqwd865V7DFJTifqzFEPw8ah2ErBPdTuXBkpnQbSE9jdNC5QWYCiWWpj3Cdq",
  "key13": "VaRqi7hoEwzXzCa44db9XZ9ybknzZxwQX7BEoNpAMX7v7yKcbUnpNjrS1LuV3qFmA39TL3Wp6hHDiid6k9325X2",
  "key14": "ZQipE6DqhADYfz7qmhx9xucUX48Vrtxui2f7iw4L16W15XnMYZnHZTHLYCmWMssU8559szyTAP3PMqV2LvxHFdh",
  "key15": "pzTKQiwhQfzSdbsvZr14knhi6fTG215xu8fJWxv2xxGFvjsgvvUDn6WYZqz7wKnixy8o4BfqLLMtNMNtC1B6v9K",
  "key16": "2ZFzfD5ZkML6PUXHo4Jtr3YrFJ4taEMfuuuZ4iApbxRMUXSLrQxUfewsLgTvLuzaUknGcBGYf1TZparp3E5yEyPN",
  "key17": "28bcmxPgvsEUFPF41YDVu9hYtQSKg3DNSPfhfQkXQYWaUGiSNMS1aqAj17LZoqhLaCmMkJV4eadysCPc8Vy6ZLbY",
  "key18": "G8gABFSn1LrjP8UrW92n6VnvUr27P425cKEKynBshXUu1btKpetcPy3EJNv2udGUqv6THScJvsfZRGsBiamey8o",
  "key19": "RdedGCaeNkA6jhabkxQN1nMFET3ryUZfiCGumxc3NSqKMnmLKFHzWqijNaKoeXus5w1pAqAeiETpjEGV711fY2Z",
  "key20": "3wg2SwnH1pqFgKqviVuSwxeJrpWmY22WUxDMJZuuBd9cS4MDMnBnfcQUwA3cDxbmXgGE6K77yHYMyJgqKaQxR8Vv",
  "key21": "2HUJhX2wJtdT4EJcJwbdAEYRHNJQ5MWikXK8eRuLTTrxY3oTzvMh5xf3c3Ld2MaazGDizHR1N5xpF58uSvVm2reQ",
  "key22": "6tavZXwcm53oZUj2iUytaGGNXovDTGxPak5eBMjHxQFrmPuLCHYpPQCGGitk1G8v2iNSn2bNVuWtxTkvgYR7DV5",
  "key23": "2n42zvP9rpen2MjwWhxiboNcZwep771PP1FWXcujd7nd55i3EsWmS5NrvstRHkAAUfZMbd2idxBZRbXZtDjUmX2X",
  "key24": "aqzHRoZj7KpYjAQEnthN5tD1DgQumZYifvWdmf2fXxZimhwYrTbD2184UvXLnskn1g5Dww8fnznsdCBqobn7p2r",
  "key25": "2dMezQ5EHBhgAHdYZC2bUank66Wp5MqB7pbCKDr44XjAwWp1BJDdbpBEvf9Cw5MvqpMSFzDvKz8fN6kkSR7KdChT",
  "key26": "fuYMDLpcPatX83G97qX662sA6ALQukdfCDr3ER1Q3y8j67MXdoMHdK4QqSvaLVC5rpp7Rt9dhraSkEL11QdoYsw",
  "key27": "4PDnxK7QcagPwosVq9QPeuruxAqAxSvVD7pT4QxBRgkDq2d8uveRjYxDWGZZ7mTCWEPnmw49A2DEJpy4TSZwapWe",
  "key28": "3R8esPHZCMxrwfCFtbTGaXdZAZnE8DwKpPULEnekCYuoFXiNm9AGC5pUN3V72VDYGmXG9ADfVSXGtBv3vLuVg8iE",
  "key29": "kR2YzFJgvqFgLwJVVaMihnFRKRU3kHHBocTD3fyLxeGTivKKspT31ExMmrYUR7e6VV7cmoM5yp2xMNfEfc6usji",
  "key30": "5DkZDhjz5KPLfZ6WMfqxu5VZszfYLZYkDERio4SzENozreyEKZoNYC9PPUXyJoKKVsmwPGFkWHJNX3eXeNKjHwrE",
  "key31": "2buE9zkJQhAVWksD2JiRvwNZmU9Tp43c8596rgi3KTP8sVcmnJPf2xA2qgBcjtenPQ1WSoD1An3acTuyXEnEdB6j",
  "key32": "5mTTdnmq5r3e9cuN2UkHB9LDZEhkETiRrUzdM7uXKM34SDEenF4K8DmxmQ1dHhDtFsZD5Kazyq5perDMg9zWyinF",
  "key33": "2tfqVEVMs8na9DGk8NpGdn2uGgFdLAshy4n93feryZSTeYSyfd3FfLzCTUip3dAgQDHZhsRwsoyqAzBoV2gzAwcJ",
  "key34": "2LP8bgq2NzLxhZpURRgTGTG3cvfH6BsAYJrvZ5KCQXeFAq1rddQUfemEA625tYedNxvAHnpZGVHbXN3abjtQXrLR"
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
