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
    "scfKYmrBYwB4UvzmCfTCABu1BDCtSHTkiTYhgEnSbjbFiG3eLXrfntofSgLJDn6fVSp7TKjPWJLkWiQYkrMbBw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eag5u9hLcEYPoDoDZLtJMptAvcq58XTc8c6u4AsMSExehED96JMuexUVdsTCMBPVZLzpzPFFMPoh5NeNnBpsqeu",
  "key1": "5h3vnbBg4TQxooo6KcUTHTY9sAoZbSnWu8BXw2z1yY5ZuFbCovnVfnpgZJrvYRe8se51MaS6cUJDwibSo4fSkpQx",
  "key2": "2v1P74QJVHFRTiD7pGJHvoPgdmuHcu7wCzcB1DdCarqG44nAQHSkrsuzFpx3v8xp3YJmMJmu7gSk9q5FwzzRzy5a",
  "key3": "4iTLsuesF14CvrdE27FuDjtdk7ed88q2ekm2ZSLZKAp4gLRj2vAyx5osft6Ss7duXVjh9BXxXHCgYBdDAp93mF2t",
  "key4": "B3vsMEgUokVgurpaUosLFED38GfRQNkfqCDF6fjh63U7oihyCTNwnBpjGMFtDJzrAdco2fzq9iF5DLybwXX2w27",
  "key5": "3bszqyx6jgozWj5tgZY4JUbi9mukem5gCUrzMaFiPYiBvrc6a82ccRp9kut9i6eudeep1JxvWx18BgmqosikgwVx",
  "key6": "5H4nj9vYrsVmpMDrxJvRKhsqBBbzjQDsw56Z5H8X9mZuQJLiaCjXkX1784RJYmgBhJx6eDQf9VUhRs1PEzJbKkoG",
  "key7": "2KtSmjTiivRTTUVVToEiZGjj4sjYscZuY6XwrKNhF1VmBFxEWP5so91ywQyiUbTZHJAN981ex3sPTWyDPjsDnaE1",
  "key8": "QBRnbHaUgWYvXzrQTTKXYsHBDjqBVfoEGs95kJ2ZQZTpLWjvrRjSCnwsAn4HckRX2xKrsJGmZ72iENuCN1mKsYp",
  "key9": "49MfjSsWSw1Xc4U9bbvdFLHsCc7zZUxWHCrieFheRpSTpGfXRJY4KTyobAqS1B7hCFwP5dekmj7xarxTu3XbJGcd",
  "key10": "4edCkeAZmvBasfPfEc4aWgQarymMKBieEcGEfbkc82harFCwrLgmq1HegZNPuiYbXRVnjSxwepCncpyggZ67tSuT",
  "key11": "3EDDBpEbCoSUBNFwMxh3XNVNXvLAFJJzh7yVfKrZBdGK1D9bRBJepb9cmveFCM5UZCW3gHVtvKtDLwjq4ZyU4PDf",
  "key12": "4XFxQCPcEuD6c89nD1BShwShuR6bw5eUEKyeMuRDLFDUo4KkfegJaL2NChUgJhYwPFuDbygQfqMoenHCr1swAhsL",
  "key13": "5NV5GefpXhpbq1AEpvWjzhT6gDGyNYjUVMWQGBoevUAKPym8LUrRGdmjpnUCwJng6SMgUUFoFaw3giinaxUPEPCT",
  "key14": "2xkoVM2As8RmZ6SPMDSyzpJpYEuUmMGnL2meNJMNyKbBQN3zfRUjoBw9TvCNQBmWsFQp73rd66JEaJDFzFcF9WfC",
  "key15": "MQcXYJm71ZpUNpLqVp4viha5159D8SBPHaRGfu8DRmzQtXEtsdmrCdo3snHUHZoK32YDnx9wadPdsmdMpYzhWT1",
  "key16": "3D4yjnNYcDgxx31tZdzi2gqrXnPimUBFmmAn2VRchkzGJkN4DaBrKDWCiBHwDPd8EqnozdoAixfoUWQux5oKw5GF",
  "key17": "grCCdYKkzopfxBKyytzbN8Fvo9keNCBLHMRFCFWy22ebnU9TNXJHjkAwCDGyt6k4SHe5nJSrHoFeB176YpjPPnZ",
  "key18": "3ZnvgX91vapPJAVLQ5pEW2qCYHAdrKAa7TZQyKpyGLca4iqFzM6mXTkoDXSSN3PjH7cDirSrgEFP61HrjXoQLrLD",
  "key19": "4jxpcE2K2y9j7cXuvd6GaLmJBjJcKKvPdbJk3Y19CaJB3UKTKuNgqaCA7u3VMEhNJLiQjxSbFMstPiJA8wRSk7ah",
  "key20": "2J39KExmfgLKcZYd6gdtCuEf5Rcvuuk9beAvGfL6SjkjDJSSKxsYm5hSBoXQc3FnbT1NZQtPojAS1GXVWa7Fvomj",
  "key21": "4v4we2znmfiRPBxzCQ8bUwXDrefswCHLvxzLMhSRu8zL9C9QSwHu6Aq2GzNv6UtC71DaCDLjPF6rfEG8LA2Lv7D7",
  "key22": "4AgFt7sSd9sbeXCd8AhRYcTxJnMa5ZjxRXqjoDjvy1X4YBpSFvSiwjpc7sFJ4FU24enyKafmjLbpLKtiZPhtA9Wq",
  "key23": "3KVAruAex4qthnJ6tyByM8YF2yt69XaJkJYbeqPQuhijChMFy5PoeWoCSwf9p9kGTV5uVUHbGZfHBp5fEcfDLR6F",
  "key24": "5Vh9g5N9YdyScik1Qb3rs7d95fjnbpEaAX9nGd8bXHLzWYMjSd4dvPS4XPP2MF6kgmuZid656Hk6dB9vGue9c6K2",
  "key25": "4Z3pkeqHnkd1B4PrEtRT5Hr61UVihBq1zRXNft9quUWpECChdC5MEnkJq3sB3fTs3QakCugKnMEEBEfTb41kSZ8E",
  "key26": "2JpTWCUGCG14RCbzpx6oEYbkpVfEAmeSVAePUTXPZXFbihC43A6eZSXefk6VWSj9CgRt8U5nVFeFr9uvCEiqkzc4",
  "key27": "2GuSKFbe3VXp9pUDGd8Dh2sNjKfMmnB3nMnB36C63R2pC2NZRVbecrbuXoPzW4YWyTEWkREcCw2SDa2JRVk4DM7C",
  "key28": "4EpDMmAAbGkYEnFpXDeJT39iPafy1y726BAyeAAfGAXATWiaB2bjzPF9d2FACdt1ePsAbFaAEwtniiYjms2wJehp",
  "key29": "3qmYFdjUB9JkCAbXud3WJuoZ2MD2ttiG4VFByhFNW8f8mbpDNePVp3H9auH4jpJHPFMv3DnmbeZW3ppyPBhdFHBX"
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
