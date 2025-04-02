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
    "4Y8iCHXShaLjeTuK2u27qpJPdDMachPf5neFFVJTjGePTgvkyVbmTg7jc1wo2pxSUc2yNKZx1m8BFGnEviT383Vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "76gUjxKpvnWNjVqSr4jYhAnSGFntnZcGdSKeMTN3M7zCPYXpXA1CQnVPKjW3x4uuDwWD67mjXje2TZjsHW2krG5",
  "key1": "3wC97Mg2euSDXmbrq7AraBNHMFHodGYKfrAaUcdjwESBXuw29Xpy54ACj2i4D4tVHHYRwjFD3fAxpPVW3c4MQ3ix",
  "key2": "2xkUXpUDCTC1nsw23zjxf8RiCcJyr4sUPtUH1SxGGTApVSZsG1x8M4YRYWRDPEYbYBcfrh85AzsAHku75anGJq4V",
  "key3": "5kPAUh32qrcvSNafLHq8iro2avLCHtkbAZFGWKWzpovVp8fu62ssVKq2CQCf8i1FyXgWv65Ew9gSiYmTSqG1ktmT",
  "key4": "cNpekGP1rDdCbhTjsnHNayzxgvbWxiH8pxbB4EnVGsQDTVBo2gH5sm8gJ48boQmqVUvyWqENjNco4NN57S4yXcv",
  "key5": "2boTMQknEFx6qcJ4rRffziqd22cznXoWfPkWm75CZbBmBSo4fLs5qWTpctrZF2HEM8N5BVXn96dgFuGQPWP8Pgrs",
  "key6": "5xzmEhW8wQf1aGAF6bqfWq7MXn8yTwKx4FWcVqSPrWg2DGW5h9mHoW76L25WfPkZubeufQnjgrSufvhFsVrqA8qo",
  "key7": "3nmQ9bbS5uS7Aa7eLwUdXQ9KpSdN9R5ahhAs5aoNdtZSQ2bbV9JV9tTZXQ12VKE8crUhP1iwLpyEZUppqNVy4WM8",
  "key8": "2xVvcnFqMPe9oeiN1PWAkiJKw7iz19sysz2RmRcQdrkVuC84fGse8F94sGk5SAtcMck6uWZcRccnow2qC7tNRCAw",
  "key9": "2J5jfc1ox924N1j6GthLbFp5bLx4tTJu7hzqbhv6kufWoKf96aYNYpwgGFeq1dT5AuynYxewjWTgh2HaS6w8jwfU",
  "key10": "3kJXuCHZKuFAhcHVFHitnwQtMqE7iNJeV5AYpxdFKZWFPmnPDx11KacV9FaPBmcD4q7af8NWN1J4XqWcKS4QMN55",
  "key11": "cygBA5D5pgLbcabjx56USqmVHJzAijwh84AWFSqZmdtkFDym7SA9u71ci38PumchCZS9zNkxSd2DxXNNaHapTnJ",
  "key12": "21UaRrKCJ8p6eBf8EbW1kg6uaeUfZyE18FDKypRfR3pMkVXNCjNP7az7WioHc5XjgjCRSKYVH4EjHnBLtnfbCXUC",
  "key13": "2E8BHSBBMLxD2VN6hnrtYeXAnWTKJ43u38PVYZrQr572gwUH98i9UKxfEzrfxo5MCsD13Gxeb9v6yi6RpgVSsJat",
  "key14": "3r3moV9sT5XQJjc2KRY95GnFwqrVtKtiNFKyyggWERrikgRjgS93KLu3ZM2CbBQA9yogeA3H4JE7oXzT9osHvGa8",
  "key15": "2dYaDPuvLZ6mRek1u8b7a4WRwwmwovmTD81UJovoSfDzDUb7eNXy9rnJVoe118ewL7LSes5eBxdri8tUck8HbPeV",
  "key16": "4TT7hih14n9X98MTrVoPZ5XTTcWgbq4To1wqBvbxnaBzJUCjNAq7JHqCoox6bFAxqY75E8hXU4HY6NJL7c1TLNH7",
  "key17": "5XFdMDeiNQ4e25DdsZnxCuvouAuS2G2hGRLsHYJnG99rdyAuXsRDomFEtLgAMz7XLxY4gnpYxYJydNf1CRp2yyTK",
  "key18": "67nN3r5K4h8Nr9QPEwNhT4VeqcsEAc4zhiNp778tfEtVcLpZwULWxTZmq8RRsw72syvuUPgADsQyaSF7F4krGYC2",
  "key19": "fWKmKwozypsL4z8pQhRxj3wLvXCNaS8rPeVsWju1WuPFLkbQ5cnWjzgddm7hU1HpcDsa69MbTngHprPjFQt8PwG",
  "key20": "3sASFsaek5YU2CUkkvhj2MZTztLVrYMW2qcxcA857QK8v4tMSTDTpkB72L9kPnTXqbjGpuEq5NoY7VBNGn58Ydk9",
  "key21": "3VsgwHB2ogPKmSdMFg8pcT7Du4Tutn1B5vSAQubHtUrWKiBiNmVnQqoLVJB4nMZM8FMzDhwqJmy6peuD4Y3asmhj",
  "key22": "45ojYQ3Dm8FxiUZzTLDNfHByqs4FhjA9CvoR9KTZFSP5yk1A4rVabCFjGa91WDrQiLoCs8t6bqNFhoqmYZSFCkQu",
  "key23": "2fv35ZR6D45jAWeWuFTh2W6cGZ1wHi51mD9Sreqm2k63QELdAxS2dz3s55hZ7gmaBzQBLQWzdDeD89tVBfuZyib4",
  "key24": "3fxNpiaQLbjEJQF2XJBeEQBETV2oMcXtcNZwBy8LYPkiaSMbxDfJcyxWzHGeDDTwZc1wcdfScTT1v9edT9TR6zJC",
  "key25": "2aqiqxCJS1bVokRia3zrKN8q48SkrFxPy4LYsqFEUfKBjDHtUjAzs23j5o9fpG86kaA9Bnc7RrJhF3wDUyNxHwPC",
  "key26": "kTbEWe4LRevgfktWaqSSV3PsjkavoLvpg5ka1oHAotEi9SKfGEy5TpD7oaNKSxFiPqfQhCvKUBYEK3pNm3CMJNu",
  "key27": "3rrzQFKdDXr61VsLAfthuVzwsSJbee9VPTkp4JEg5883zFakPZGoDAcDhrV4qdGThbogkUuN5sogVzNZ95ciFZGk",
  "key28": "4Qv4TsQSL4mE2vXSMQj15q2GsTc6dxdjWbTBgNCYLjq3cN7dF5i4CyxF96SbwXx8AtnfeKUht8xKztXzDWTCHZvU",
  "key29": "56wVmakMLet3krxN2yPZSS8UpronH6DwSh8JzNoTetHYRuJf1KCEiX8NwqPTPhB2vE2Q78UoSeohtZL3KdYiqEFm"
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
