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
    "4SGuniru326duSH5MbnYZDEZz2LXfWWW2jyMipGuaKn9vCpZHR44BV2RrGUoHqhZabwAeeKsZTRujFni2jmTsmE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QkkX5MGiHGFuHD832QioaL9Rs33vqE6TgkAYSE9QepWFH3THB7DVCj4gySSWGpiZ6NJ2wwV31Sevh39FRwzovS4",
  "key1": "3VPS9WCrHzY8RpQvmXuddCD8keQV4a4auW11DXzutmc3944smZ9CaFqNJNwisREZ2iv2ndSfX53SX5c9iwbSYHLw",
  "key2": "2NuSFz29rXVnMXxSsp7ZBCAvkxqCwSc6MGn4uCgLNx4bNheTfP2BhfEdQjj5sqM1HyR3gfT36YnhotfBAr6YL8Ny",
  "key3": "62eNyhpSyGFWRKADfSNJyww4G1hvcbpgL1SZ6ZZtD75uobyCzTnKar9SqJUiMqzcaFpfPr81S7DHpG8r5gp7x49Q",
  "key4": "4UH7fPhE8YGV51b6uYLufstYLKTnhJkdZxYxZipPUdbZada12hJe58G9QcNTkKApQWQtRqHmjjWmwTrphJsNLWFJ",
  "key5": "NAS35Lt9vSBVYgCigTLiyukxhhycUzGPb2BtPRjyxUeDKVN1M2tisdSdKX8gystaUCy2s8XSZY4phoJxJir3arr",
  "key6": "2KcbqGes7uGAn8kcr3fhFrMmsr1GYJyACFxvWYzc5hKcFPLL31PgD2qQjjrQX4sKGB9bSPMvbdf73kmicWjTErww",
  "key7": "3cxejsGYtaSMYypGyVrcDsGKx6zpqBtDJnuxk4m699dBxqXg7hqo5xUEqN9hALYhJveGjhaa5tsseUsnNvWvCsBN",
  "key8": "3TUQZy1RrAPCS4fremhKmszvQGP3ZeUzsxXTQ1USNZJ9MTJdjiZ3wpabXs7qyZwkyHiGu8p5ocCGWciLdEck6Vgz",
  "key9": "4KVUD8doo5qd1Usk52hoi4mS6bgwLX8mLzXcoYPbVKWZuH5YpgfN5zqfbvsPRjDvnsFN1poowMn8S4JYi72k1MNu",
  "key10": "23hwMjGozH5nuKEwfB6ZntZvdYze2tQzPPuucrG4eug8v6JxoX6HFev95AuDSnWmt59aJQPU2HYpfTpxiTa5zjbm",
  "key11": "5zDHQgd3iTr6PS1JJ3mQYjEhkysiL8cc91kr7KKVLT5bANZ51GE996Q9SNq79RC7Ffch2Tjj85x4Ujt8tGUyXFw6",
  "key12": "2cbGugMeu1osjhyarzCJg2g7K5yYG2MqLuruvqTMyPhFSWXXpLk8GDoL23UTD2R3BogvFFtEfSfEYVorrrKTeJtK",
  "key13": "2pvZPz25cXnhjDZu7C2jcDTZNmLqmG91Cisa5pWyJehr3HA3TMJG6Cab8e9xXrG534qnxQw1G3YGm3hgBebBtuiT",
  "key14": "4fppxjSPrD361nbiVztYhm7UKhgPKUZ1TCebDmsULLLji16K2T8a2WAv5wFP77R9rXxepYA8pwr4oUDKjs7qwsDy",
  "key15": "3SMUeLtwXSSkrbMFp87gFNgK5XHds7Hv7mJ3xGhDtQDHwjsudHNXsjMXkSu7PHLbpi5ijqR1bLZHdKir2YZew4i9",
  "key16": "2XHWeyXBDNtfmhxr1k793Wu3QFbmEgPkiSQ9z8iH6AbR3Vu2sXodowuVVgnEiuCuUB4vrzJ4Z5FNxrxVQ4QEBvaT",
  "key17": "2oEF8z39mb4A15D9s6DeQPLsJa4eKdBQZVaChsWchfJvMWd3wfmjq5eCmLmL52eLsNCoL34aRX9SwMGXkfmXjqnD",
  "key18": "5UbthiqXCcRmFABVBFB5DubD8F3kANjgKN16yhXiSFPB1V9v86GRCaoLDhfUnr52Axk2fM6vByYFnsDtaVMBs8mr",
  "key19": "2m5B5hefse7846puEFPMFJnddter1vwmXEQogaMTgLFpArPRKURKeyC2BiQvWTnJMQFgNX9b7zGwbD69y9KFDzFt",
  "key20": "4qscJhdDBYdDwP92bXYXxhriG7y9H8MyLxXGydpEphb1mLM2H84qkV6NeU3Yz1wqmnZxoXdRELNu7us36PaXGUro",
  "key21": "2wPfWLdSN4W6S5KrwAUufphf4SHG8hLgtbjkLEf9QLw1s8zb7iNTc87e84S4AtKEkx2wnyZpZevgdU6ZukemoLqg",
  "key22": "wqgREgbsQ21a7eMWvtvVYbAPoYdR4kg2UeQMxvTHaps7FL5otTu6r2h15ct1seudcFcCtdzxze3Cz28dxiMwtTo",
  "key23": "3P1AZZuPbvhCwF27cLKZ1yuf56Fpf5MYVaMsmmBDS1BJnKTAXCCPNr8hbCyRWtzBbTm3m4UgUVbAth77Dz2XzzEs",
  "key24": "28gjk56eizokXVEEqWSyM8f4cGGxHA7RwB4gYER6Zdrjujk3iJzzKBhEtRhW79nxsGH7hSJPB4EW3cvnb9U1fRvm",
  "key25": "5k31yZPF7tFtmGSLVJRknsotXahAhor4MWDLhSiEvTXRoJcxv6wU2QhZBYxEJnSWV7ohv1HMxW2hEfiVAN3nT8fd",
  "key26": "4f9uNWdcfZmpzRfSmt3BMC3sqRmWe9KC6NvTN8CBnA6mYyDnz4STJ4XcbWguGm1Hw2LRs6UNYg3PbTRxaFbQGJQ1",
  "key27": "3ssRVPnB2fCGnVGT9x8vmcP4EUgkRKBAzBtihbL6pwwNjNpgaf9vvxqunbcckt8hhSXMRDdLzot3oHkygcsvPy7S",
  "key28": "5Qu2LoMxetfUMb7o4DtXSNmFHzJ7Jasraurn9qiHCaH88BK5mkdR2AtQV1A7gmfTST3DDATrtXXuSpA77xadRqxg",
  "key29": "2HoBjyRkHCGjrNhNEmg5sXtBonJZoBVjFrJWdeZvV2nfb2PeRaUswnY27QC4TmdhiwV4hiS3JzDHRwKYMXwN4eFa",
  "key30": "4W4PrHWmkB1X2ARGQc8Jb7pAfVEjuJLBuhGrdrgJzhZDGLaMCQnLCbmiRVNPLqZWu55hWViXJoU29duK3tiD6h3D",
  "key31": "5mAFS8pj3TtJTogz5BvQw8GBmk5mx6Euo2iYNvNFAS179dfwknK8VQAwd45c6wtCWYgA8t6MvYDnc7mSBqXga7XJ",
  "key32": "JgiowtzUUo12rWyhTmPMW4DTYrEsPt28W9EP83fQyMs8CpDUZ1Nc5DXCxEJjnctPC4h6ZoRLoduDkUmse6aaq5P",
  "key33": "2CAbHfP7WnCsTwubgjbK61WDvGUGuZbTkD81eJwgLacAy4KcRNuDD9anf451x5up5AzWpvnnZ9aF2jP44bEfu2KE",
  "key34": "3GPec2AoGYB1uX79hL2qAVuMcFF7GWkqaDVim211kNnPXP3Pz3RVjADbk6BzeVXHb59JNihuQ4fHwuZGSD8HMRQD",
  "key35": "3KYB9MyTy3wy9GcL2zDxmQV9x58uTC1CzmHCdW5GaiVFMJP9uTvrRJ4HNDY6DCU9xusHJa6Cgss8SQJaDKQMV9LP",
  "key36": "2Mu3c8KKcHR8rHSkBj1rsuZEeSHzVyZorfB1xFiTUwKLEPhjVpriZgW2zQSk8HawM2GYb4C1Vxi6veuKPzTsDG4S",
  "key37": "4vj6PqtYNqNY6fcnf2YZfJxxKsGC2K8qeVeasMTiMJ7zeDHDsAfEaxKFDhUNVbsgFCm7D3i6w2PvWGDTQi9iEh8r",
  "key38": "4VvgLwcJmjHV7gyPCcQLCR3uiwENpb1Nx2jWEnxu5VtC1XrpJKd22PfWRYNXQmbuGAsK4xP8YyRH4CQ93CZAc7gt",
  "key39": "3UxXCJdEkvZZgKLfNQsPxjo2mSBrB6oex1bq5197TqGvSE298Nyqn8qNgfr1VHRiiWCkiGrmDiJrsWi5PcLmgnui",
  "key40": "5CSr2PKSCpfEg2wraaFrNjBaNuKas9NnqN7BDKCsw3g9MPPxPTwRfZ2gEcUhz975AxRqgcK8LrorBeGPbVrrbEh7",
  "key41": "53aeZ7BduD4uP1cX2zgiC12SJVK8gn2AfWQ9MJhSjNLSFfKESqvySSGfZET3HeChuRqCn2vgqtm7Nsf3vd8qEUD3",
  "key42": "4peARMk3ZuxwMpqY9ejrVhZeBENNKhtnpQ7cuMM7mfKMtyUnaeziz6B96FBdCXkhRYeg1cCvthueZVGkJs5ooV9B",
  "key43": "5uUDBYYVJNFcanMVctQePVVoRnjWhNPHtBaNomX82W8uiTvqjmMo19phQ75AZaPCDwevCcmatZ1nAhBapY3oqCJ1"
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
