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
    "yKoZmGsN4cPisXVAjvNhiXSsqWufvjbfCtc7pdXkUfeiiVMi75EzrBwmfcgQxXACd8J6owaQ3yrXPdVJ3y8sk5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqRqhPmwCqq8vXrACXian7X4sMrXNSX3xszVwTDpm93yTVk5R6tawzWy8Lvt58DjG2vRSUCmyK5g3kBFs8WNXdL",
  "key1": "52mciTCZPmKYLwDb575Nttd7zeRvbf3HyDG5o3LTYudcHd4n4jzw3pjWoMvWQ3Ea9zoFiQx5b21uvv6xuGrvy4Hb",
  "key2": "5Q64QjCyHKbuyzeYyfj4Mq2XPXHrsJLFUYet5vEwY2BYZByJwjhiN7dY4FhGGU1p4qKhoCK8cmbaQskuyExnWZ8C",
  "key3": "3q7gDDBxCAPRQD41WNKvgdHu3gfPzLvPEdr7CYp6FNah8fHYBJqLzbqiy4dV5HzSaV6pC6TVZC76NgsStcfoBoXF",
  "key4": "2H21KtJWmoRoVEKkDnfcvEWPva8m3kXQ5v91dKH2Yvnsen3SCxES5cgFoP2Gcju5ZkQzNueFA3zgBf1RrJxPPSy5",
  "key5": "4r3Pq11L4rHBbWM2cDSmy9qqrkQyWWN5JpnsAkB9H885dWZFbaeiNpVyk3ZUhLmkatcHcyaJYzgPp5zSw77DKpPG",
  "key6": "4q2VtXfHq71sVFmjMZM52DKBSe6DGPBTxZhAmWa98pPmdjbbKxYyFjA3nUUQJPo5JY1gTpLBpjjYutdCm8RKk865",
  "key7": "4TZ6nnAdMvpzLXcbGdrnnG2iG4FpArFp2iFFqnjjqFU74iDVdH1BhybHzbn12DvTiSZo5k37dD9zmuQngiigVk3u",
  "key8": "4UQYaP6RKbT4P4sB2CoZMLu9EzMt2m8QxnWE8z3UU8jbHhbTLLhCsE48KNLbtbja66gjMz4RwXjAvRWwLneKamFE",
  "key9": "5jAZgqxcgEHziCq2QUyQEG8Kt6ip27HZCFEJF6AtgxsASLqU9XpoF38n7ZBNsjVsPes59anbrrkXRmAZpZVuTj36",
  "key10": "5qDpmQft7ixP5gHqbqwNsrqjq88osB85A51my2zF6jxtMWAk4yeaCi9K95va9yTXFWpuGJF9KWiSkdeoeQB633ff",
  "key11": "2bSS9dnX4vUT22ueM5tryftK5g91rpX9pFuMDifk7qQaPsbHqnRKLJGQzBLcpNxrErBcBzyJSNs5esMpDrnnnFj4",
  "key12": "5PKxH3WoAHbpMKHrdTLQNWKtVyJ2fi4ciyQ5VCwVzwf9k1DguvsWbL65bw6CrHybf795dNNymDtukKFKzDxkTezp",
  "key13": "2RMnbUJDi28eMBet2UYstge1AUSMXJj9HupxBg4JbnBW71rG8DKPCumAvrU3yX7FoSjSwttWbTAeLapqJ2v8gTHM",
  "key14": "ZLofyGm5EnMXZhqobXoqw3RbqUMQx7RrBZAYMEc8Jr7iebyQr9Bp2RRHsE2eyHkjNo7ngov4t7qocwx61seBNqp",
  "key15": "4QM9htQtGXHZo1h9TUSZoUUbvyhQetzFNbkAbCzi8c2zwvh7K3bm6ZcHYMPvpFPrCDnksFXTZuteUDkudLQXYDZC",
  "key16": "5rxKNkXR2d5pdTQLpE4z6EwK1kQHmzhddK8STc6Ltxmu9cAfRV3WASMfrYdiABNDh1j12m8AosZDtHMzDNCUgQAe",
  "key17": "4KTGLnwdfeEPt7r2SAMXVF7bnZnEi3VzSZ6qZ3VcxQCpVrCgRZSbXgMzgPQUP9UMLWHiR36MDn8zcnVJAJBgdwfH",
  "key18": "63w3HH7NzhCGP6Fq3P7uzrpH52gtmgo8mtGehvzYfJxffwbBrBRiszwujRH29XR15ftVMeRnbusUb1SnKspu6sZU",
  "key19": "4RVUFsiqhokGbaLPrSDTuV9uZ1yRJfJ39bCZpsAM5uGFRE5EPgWyrCQYDL7UWDwUdVdodXU515EpSpaXsFq2f3BE",
  "key20": "2w4Ew8ZGiGoUK11XWmVvxnT7BUR6Z4qaZ6YAK2vMXBv7Ho3c46UZ2WcNXzzHD2yqnvxK9UAV8MhjKLupQ46CT5uR",
  "key21": "3y5RCK3hSRnFX44UEHXhHXfb4Yc9XVE6Sv6NzuvXbARw2cBNFLRAGFYSsFE341eNXnqJM5SDGxgsjvdtGUFhCYAe",
  "key22": "4hvRWFa6KyWUs56NMDLzyKmJ9Cu2MFaC94WnEszNqPehqws4wd3Zcdk6U55BjjB1yHwsG9HDZfD8g7iL9PXKSC1S",
  "key23": "42SsPb8aET8YisT3qaEFpGA5RvEP6uZ15GCArRcHCb1CKCiTh9su9DGiT1pknqv8PLftpGkLgt5Lx49FHUfnAeaH",
  "key24": "2rDWPS9WJx517jriGW14ShMaouZ2AShRbdRprMQu5KCciXXje18F1sUnbejbF4VVoJ9gx9LSrZStp5RwihCJGgDX",
  "key25": "57zJ2gSLRS49S9mJLZ7MA6xXLSguxWb79YEXqA7thzKPFbfXKmwHqV9m4hEp4DrMBnneULuQk33kzdDdT4iY9xu7",
  "key26": "5fP3RozwTu89xNWSHnHk8JqtswmX7UL8Ci2WoCay3rZzCLPP7nWYAPa5n1s5x4D6AyCkFVCkv5jUeai75TVsHnGr",
  "key27": "2Bu1x6voB46MsxiephTKcetGkEv5TPHtUEhEyYVwKy3oZM4k65BfwrvvBb6KM2RdFwCH16GAm3wRh8jEBFT2vvJQ",
  "key28": "HbGmoQhaxxaG4XLsf1uyiJ4ptaLxJDYk4MSV2GDyVRdWzTyKhB3AVgnexzDbdcZa14CjR8NNB39MLTZoZwXQQhi",
  "key29": "42yV9ywV3npgSLCKcfLXmDdVP1x8BfBM4fj6z1xni1zAnyqqWsURRRVAq5tu7oUmcuR6Rkin16NtwShN5x8giekc",
  "key30": "2aa1zXor1Z6MVtYd17BdT1Gv2AzgZPoFuAqFCKoqFdNDx9x97S9poK4ai5VP9af47GD6prPgeW7QhMgzLHBipTH4",
  "key31": "4kX2C4agaqQdwFsLD2GBFdxPVCyTGjK8t8sdXnjFusRoFyTe9vbibyhzG4dmEjkm43rJDRZUjt7JyEHf135L9hX5",
  "key32": "4VnV9CPFr5DZL7Y63FtLg9Spo5Mig9Cn336WY3NMTtJ7JLzDuEvqoUFFcyKxDahVgypEhGpDPS6HPcj8ddNVBRvZ",
  "key33": "2SkxopfCK3rh4eBBm7Zf6FRp24cio2zqGetqiW2nLEQSuJnMSoCFNvV2v8KgqJeKh3FK9ZzzjFKEWiB7wu8PVVdf",
  "key34": "2Y6PjFZrSDA6BQEAEbz3aSt7i7qDYtjBVnZbBtsYzxWrBRTmUrktrnzkgEMD6jXYX1pzJasZWBWbMRJxturpbxAr",
  "key35": "3kDTSxYJE4hnFJuSCthxudEFQeUdsc412E3NGg9rZvpqnvJTV8qZKPue8c7Bm2vzgnrNtHibzXv8TkaXngZLQjtH",
  "key36": "2kpmTihRVPSDZRRXzUELZ7U474ydbUPGGyVj2qKVBstYLyhUmBJ9GaiUkozByVjuCyAsWjHY93aGzvtupPn4mbiN",
  "key37": "39Gc2NZp7mi2VBbDYWveeAzt14462Fa6874nNPisGawSuQ6UQovg4skPEoqcPRnBSrgVMS1qXpvz4QTMhwKx7UTz",
  "key38": "PCjvWuwhGfky8feZaVHKDRDczvfKcW83PVhHiWvufJZNzKtV9Vper9MXeiz9SAbBfNH5sSxZCFA5HCgTMKydjp2",
  "key39": "uD75xhhTy2rFMpXfUzyveqrMktSLS9AjW4p2MhDLo9fkPrBtTitHpJhaufNtzDi1qoC1hq3oMZ1eFVE2dX82DtM",
  "key40": "35Gv9PPazFp529je4cWHEM29sECTGJizQA7baCHTvwCm7SqU85369C1vfYfahDU9A67rhHibm11VghH3MuMzV7ja",
  "key41": "5i1jKDAWGsRAZZQSzS8jszySQHSkVxDKPXESJLhxsLjs5aVmEzyg7SuAnrdEygxUsNQZRH9juHrnbMUGQnFnV1AT",
  "key42": "2CtLKbCVZ5m3bx4ZMD6dMioitWLAYEReBS1csWCP7yqKoJPJM2W6CTotVeEHyXa9C963J9a7N6zxQLSSCdC1DGUW",
  "key43": "3Dpe4db3fK7PZEEKD8SQL5rgoHgaaHrZ6Zd3UXXHmGdqNvtWzbMnZkmMRsDfRMT29VTdKYdBPWRe2uwSyhowJZqq",
  "key44": "4E5JW7R65k5PmKtfaSHy5JB2CMAsU9s5qFfNTp5SrwTEUAYoePWytHozfCy2Y2So4aJAUQPPq2JzZmePR7WzcJsX",
  "key45": "A6JgQKFau4LtE8zJsWjeDepmDjZMNnBabrwMBFTpUujPHpbBRY2URKW5rHwrLjeXbpaQhH6fmvvnsd9s68Mt7wg",
  "key46": "5pNP1GAPSVEG4UJSRjedxteor2QcSf1SKsuiWskxvw8v1WCAsxhC8cNTg9oQqQREmWBNRW1ydCFvAkYeFmnxLHP8",
  "key47": "4TdCyKPQxk16D1UHB24yydfeRrsNQCMrL1wUv7o3bjUsJ5c2qs3EMzQScPk53HdJrQYGSgQLg2K1GbHR8ZqTCJPA",
  "key48": "1urVTpT3xUchbHh4s4hTcpyabPddyf6q1eJUtbhkog5aTqrRHM86tfjvqgQ1CDEZEqxxvZDmP4c461RDYHDujNA"
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
