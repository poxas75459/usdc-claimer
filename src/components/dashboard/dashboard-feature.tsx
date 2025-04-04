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
    "4TnSZFReEakVyhaRrpSvSecXKA4k4wFpfP6ePQdD1XwbSeidDmNN3esbq3r5BvDvzwDqkxW3LnuYqq77Ss18RjP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtsr1jxAS1FVoW7N9mfHawRLWnSM52xoyyM11cwxFdz96bipM3wKPxw55m1tGkBoeYr2E1inXhLMfjjEGqJDW5b",
  "key1": "4dtqMQyC2wR3o7Lfer7B2HB7JxLx569UJanwhv6Hibxrh9n6QUwesfJtAHJwtPKBMTbzuqP4cz2Z3Nxw3vqrc3GM",
  "key2": "4Wj8DFJJzHQq2RyjXZM7j5BiXjLQfwtr6ZtgH4Zecm6UhLgLKh6gnb2UpzvJo9vXczWmoWN14cF2p8BryKmKcanz",
  "key3": "BqCpUrbbJxersDJ4sTnDKjiBdEFydiUy9oAQqZvUxT9iwuHXSCTD9zEGgd3Fputnk5x4xjz1sJ8quLeN4QScuLo",
  "key4": "2Hscz6FYLPHE4XmUbRgyN6ArjAEPMdeivd4VSM9WX4AGnCDXEeoPEqczVowuFxMWvXHUtFu2H2oZ5oJ4wWtR9eBW",
  "key5": "3RbBBePx7Dr1C8TjBwZStUMkhK9ucZxkiwUPnC7PQnkUguu6oV3YvzGEVwwBaLTLFExVSu3nTkDLGeDeri4qCvcE",
  "key6": "23nLMx2XgSb6kLvPkvFYxFNrdciVQqLs3c3G2fh9DXuUgdvx2JxVxsp1Db2x98ZXeEAgH4MKZ7igt6ggCSsmwhFG",
  "key7": "BtrGB9J5cZSCQACPbhZHYyCi1krcB1fU7d97wr44PzfhQK8bdFaj4JiCGuWKjVthz6au4jpsJAwcv4xuEtU8iPZ",
  "key8": "3uCtkze4Mzf1xYXsjzXQpWGB2NvP5HBim6NTV5LVFYJou5pTRdswcYftvy1UvX9hc8N7HiRMX4Z4HYWgX95sEdNS",
  "key9": "65ogSiz4tC7m9sCivEAkM8paQ17fJnaCM8FjRzkdHovqur8uGL1EzbjbGrHMRQe5i7FrQNXcojGCJRswtJBBtzUZ",
  "key10": "5eft2M3beA6vcz8VficcNtjYYYd5CamSWbETRG2fT3799RCdJvBGNksVPFX4d69s3bEhDc69q13gJrg8nDxBF5Uh",
  "key11": "3dZzh4KUWWzBQPrEU782Zz95cg5L3vSLNBND5Vj2ba7P7Xvpc9HoenNHwkrABpGmprQxmwzvegU2yHyHmft5gsL1",
  "key12": "H4Nk28jCT8uUvuzNfimd3BfgWRYzbSG5F3rJ8NVnBWnLyYFPF52j4bFXH6GvGZZYs5G2TAn8p36mySm9NhjZ6tX",
  "key13": "4f98VyMY2bvDcfXP5P4VvMtUFAcby5QWrz6fdrkcn4FDcj8Vj8TqWWTXr8Lr3H4FNqfjKKu5L2LnJw7kKMgziFcM",
  "key14": "8pwpHpQsyXHNhMwHoEj4NnT5VUsa83hHX88KzxmKfx7trDu7EFkmnACtJDYBjnESBimFSXoRnyfVRmuysTt3xqQ",
  "key15": "2q4h5yK3px7itaC837yDcdwgxsGVq195GX3zzbTiWv5rRB555rXqhmWGPhVsDVswJ5i2kKqHhzmUexHMX7PjdwU4",
  "key16": "4EjTqD3srtmxjrq3Q7b2AG69wzcqip8jW9SWk2bBiVYVwV16fNsk1Kx6NybZnKgwzLwpK8RCVUWRr4qNxtVwYjM",
  "key17": "5bngVimkkKLR3qMwgC3wh5akLA4xUpep8RXFv3ytMAdAFx115iku5dBEmARFMia9QZ9ZSHKtBfjeDNpWz21EhUqZ",
  "key18": "4wFtt11ACrYH1F2nyUMZ9isKbDAyXjeRp5SAyfh2rnwWwKssvUg1RLFeeZzkcpMb1WCtHbM1H6hFnyy4CsEqLHfC",
  "key19": "3MDjyKhVAD5YHfqmZAQBp3q5Qavtae1btSvBdYMzuVYYAH5Wh9ZyzL3cnMjLbrzoJzH2M19b5EQLHjNfF3HXgiW5",
  "key20": "2KYpfDxcRC5Fm6EtDciXbZgQLm7UvLsvFTiq5FeDtVeWy567ZWxMT9hRHuVceCtzKthn6DZsQq5AEStQxErdBji6",
  "key21": "39vpEBxq9now6zhFbpvDjXHRYMr25MTwNGCN1Z4L1eityRhDJ1cttFaXmZWwTaUrV6SsnQwYe5on3xWF7npzwyC9",
  "key22": "52rVwq16oQWP3Xfo9EoQYo42uC7jzGcrAvV7QLqJxV7NubW216kR5ijzPYqCA4WJCcFCzi1pYkMkbNkofy5fP8H5",
  "key23": "2KMK9QhH9qV1aqnQo6CP6fmhZGQKCntY3YZ3fcMLAbcMjywJrwmLaSWJg2JEk1iaaCRwzZxdJj7FQNUhauiuMWjW",
  "key24": "4G6xX4mAs5sC5f1LT1Fs6kLZWRcUXrgK3mkKYdBGWyBbz9oo235F7Q3r5qwHeWeK2mYDohtGdmPEADfFFLaCfVkw",
  "key25": "3ypHQFyiZzCavgw8zH7xibq7o8mm83rDMaAsb1kHFSqSFf8zt3zkKEFWg5n85xZog2TGxsoFrMLvSx9udZW5F5f2",
  "key26": "39nrbDTffp8WLhtAkfBMvvuSEpMx2o9DNqfrPJU195vaXm2iGwZhJpX9KhH1JZWbYRDhntURN6o5uDzM3QeUUfEu"
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
