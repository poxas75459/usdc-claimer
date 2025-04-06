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
    "3Nikg2JLm26UtcQzk8WLc5pyqbKd5x6n2ShPjqHCWVCKV55PfSvmvZc5poCPNxt7BTxKvabBodMtzbkPv7wtydt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NHqh5qzAbu9aiPcCG7qXjxQLNUgKsnpAdXwfr8D93QKsBVs28CiiWV9f1cRetoENxkg9DirqFkfBK5PtJtHhN7L",
  "key1": "376PnDt1BHfGhrbMapSzDFTLaF37Ltbf93ey5ueXQPG59BGjGH4Af3xaHsVaF3M2ycrqToJd4nLD8SdH3MRnbef6",
  "key2": "4JFjT3YRSVadRe7q14hVDJ23163xGR3pWToV9UYCeY5EgHZQty846EtT8SDAxNH6vUUhB5Qn7AjiJgsTegF7ZQjG",
  "key3": "2DJbk9NKE4nCHpYjHp95FgLq5Lejo1W9LYLQtVGdRpNxZDAkxPF8ZfSyZn5B68hKLoFCMFXCowTeSFWpC6zk9GVN",
  "key4": "9raM13oRKHNfcTzVhumJ2JYCtfgu9ZTZnzmrrdBopB5BHKmtJoz7sz3LyGRxCyQJ3mwcyGKgJkK3Ss4bcKjiJNj",
  "key5": "3r4k6cynnNVeh3TyKHiyMgYnDtDJkgUEmv2gsFY91aHzqNDPEcRHGXLXJLW1VPBZRNzfdVKNdhwpT72FUYVefjdm",
  "key6": "5AbmBN3GNu8s19xwn3to8hjsjgrRPQEMvrxKGmUB9Mvm2uEq9zvgUdHvR9F7vaqPvPX2f2BHG7wbwQrSSSgCsm27",
  "key7": "r8iJkrGkzCuapzG5fjqLcTACWZoeNbhr492p5LgziT2dvv3FEqVgPFBLdEdtH6MJZCm7WJ57dgCRWtz4CWNguxj",
  "key8": "hjvvDTW64yCAMjC9konhofDqfN3Wgnw3VPeA22kzdwgzed8Vb71bQ8JWeKacAXDx9ohXSHytmKY7XMb9wz5LHkq",
  "key9": "2Fam9JiNdzSaCigr5zFifzfR6NDhMyKPrSgy1ZtFDDLAVKkYePwjqFboQi6AHyfPHwzNPuebqw5P6EDwiYjUsEGd",
  "key10": "5zPvnKuZb1BjM6FPmkVHYeSCV4ee6pTBJ7xuvg8w7L4Z5owqxFBGW6DJAx8bR6ronFczon4eWPNR7fEEEZwNkTKj",
  "key11": "5dcSgybSkczpEtQ42yobxJzdBTSYtoYHRAgC3sL1Y1TWSt587muWbS4UC8We3uxUvpJzUUWTUwZuWTRXAhBgcrZf",
  "key12": "2xoC7MQ8x3tpqp2gaer3iyVr5siUb4pVYCxsGNqzWnauZ8vGt7cNZCCEkkLuPUo4hkhfTZ4S6tnQ91mkPgMDwZEk",
  "key13": "48uK59nGzPNNVT1GqaFTn3CHv9anyYbD6KG8hJ7rbc3NXXkEnMQonAJrBuro561VBSWWRUbnpAAHiy9bYL9TWxyM",
  "key14": "2pPNDGZMmFjNKHz6QG8yvrojeuk27zCcNoQjaC47rvHQNgJL6cbHVGRH37vZQJdwBc7U9uUSb54T7GjSdxp5fcXY",
  "key15": "2pcXQj98d54AyWKgct29XixqtkspfZtKrM9q69hD6kk4AMevR5Smf9s6MEkSttiJkU1pTJCMyU5FkuLXzsDB4MCp",
  "key16": "4sH8R37ZMZLPH7LX1qv4sWXqYRjWDMs24d8p8nkpGN4k2P3xpeW9ikQPeqsnS6wjkbygv8sWYeqdmuHpESaPMKK7",
  "key17": "5rXsU2WuEPPNgDiLTWsdRyogzfcDGhC12dyYiLhdenLwGaY9yVAMmSFnzBqzaxrqGkzUtDo5X59rBYdUKAWT29Le",
  "key18": "4o1ukT9a7AdckHE6TtSdGdCMvTwra5YkeVMhuZv2wKefHHXXBVg3oP685sA1bmj9BhiZWoRutGhhPrLo3qFFnCtK",
  "key19": "V6gtx5h2DZLeRyaForURjsHy1AwoGYZkU91AkezkdfdTmAwVfDbFGG8mvFMqgHBKtJ4Xf5QACqpDMR96gkLvt61",
  "key20": "53oMTYX9tPJetPG64k98DjZZhRcBGaHqa4ECV9T8LqRWMKZq3PkNM3G3zA7mRopw2Qpq9gzr58cLzG2juAGPL1F1",
  "key21": "4vYppFKAAJZsxFK2JGXapXVD66wJAh7WFw6KzW3ucu7BDMMoVmYHTq3c9ZW9vm3hjjefKaEAqdDTvZaajqMRaHbo",
  "key22": "G3fTX27dtKi6S4s7bac6YrouWePxoS3Rc8iAabW6FR4PHnAMMAmvHrMPiBxobpzFipbDc4KgUbUPEKW8Q7wGBqU",
  "key23": "4CpbtykExn2Uihj3fhLEUAHvmb5EUDu4ksWDhi9WQjhYd5kCoxXabMJHkxTDsQW9s4pWVtY7cPYiy3wQKq24wExQ",
  "key24": "5hwiAVMeLZCgf1cJgxrS6ttJ5VG1kTmb5q87XfRa66WNntZCsUh8nouCjyTczUT8FnxGAwjAZJtxBv1T3NZvYjKL",
  "key25": "64ZbuRu2Qg7FFZmzsufefNvzKcpMBNGhdGRj74r6uwUpHh9K3QPNZ6AC12fDxL8cgAd7bmSg2AvhHcUygJZnFdkF",
  "key26": "5G3ykL8x1wR2EroR1Qj7gcXTTA6fBVZ1v87aEyW8SZMAPypRaiJsJQKehNeMBRSQbNKziCgCqAXi2XEodbfifAbQ",
  "key27": "2qmyqq76EdiT7JLxusbRaSQRWpMVcMWD6bARKavaGsWAN4YL8L2DXK3Rz47MeuXuTj63o2mukLJJjVJBVAvNupvF",
  "key28": "25mUiDYYeTou6j4uEqzyzBaVJGPNPwWGCmgHFzr4QiKQoKVwYmJANiWX4HAk4Yytxb2Uo8YDWsUHMgcbKQXYgnAS"
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
