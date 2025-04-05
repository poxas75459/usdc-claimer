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
    "3qrHg2ELe4YRutyVcUH1hJrmeXBn7dXwn6emUJ54qVffxN6a8mUaHA1yStBN4fD1P1gKCPUPWfYmuWz4Vuz336gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJksAk6uaxEfAhtqvmbaPVmXPHZPWhiRWqMMEBq1qvd1RuMXktrsqbeKhvHWMyVo3WkQvXHzgPyodAv7bz7Z5Hf",
  "key1": "3c2GUocjjNECkZTWRVw95Lr97gWuJ5hooQADC9UAxjtv5nnn8wte5saD41zNt7WNDmYzHixq5zJLsqLYqEioc61B",
  "key2": "4ku6N7TCVLeNSUmKknHwUb2bvvKFfBuCvbyLE96cE2ca3VRi33Z5exBWRD7KnwNn4shZszNFTJd4ZUgEHGmNFiN6",
  "key3": "3VGdpHX3Vc2ojSiVH8tR9w1VL5NLUAz8gVbn6b8ceb4LVetpHuTPeRBQniVzQsqUeACMCp7unPPFc4o77MK9YsDA",
  "key4": "4Ti1aP9opQZdok1L6HjHp4UZ7zBtkCjbmvybonZiPMsDaP2aDzzGfLUSzibE7DbaVXxRKvnRrHV52v76ZJCAnupQ",
  "key5": "217DBFNzPbCmhRSKWn1a92SwuycEoFLu9GfMYCKCVwKJ2qAvW6xSBXtvaRbxSmfotJSeUL2ezkbdo6EVjGt7v1Ty",
  "key6": "htESefx4i7t1XPFVzKW6TV5cPrJy33M514TBYYwcTeBH17eS1M8iZms2WfhBDHkFHhxUiFN6BdNEqZBTmEVhNsz",
  "key7": "5QA6LrztXyJcJaP3Ws2rsnFB27BJjSgaKkf3dJDeS72YUdtq9cq4f8YKnPgzZYzpNVMQVyQi592bhVc3ANCE61r9",
  "key8": "Edik4j7ZUNdJFKQBSG9KT3my9qGzBG95AowGQ55HCDXpitG1iU5bZWU412JNgrSPnpWEpGuppbCerbRLEFfgh19",
  "key9": "5rYvkPyXjdxPh9x4qLqY7snLeaAUhodj4YjTuLqgLsqS9U1mbTupoGnXzjmLeWViwEiiGqjtrSJizLKLVJL38yUz",
  "key10": "2PGxFokmrcfa33WE4Ck13YFtuHikfZp1J9wLn8YCbB7Y14m5iTdt7GzVuHYXmwKQBLJeSftViNH5eJuGrqbi3mvp",
  "key11": "4uqE7GJnB2rsjfhu1S1vnR73rhuY1vvh5pH55hvGpGzLbK2bJy749wdUj2Kynpdksxw2obqXR9B8d2iSenx1VD1X",
  "key12": "eopR9shTt7G5M68CKS26gNVcLwTcZnV4NgfaH3GewkfSiokeD96K1SFp6HbTz4YRPvAsameUB4xYTYgtRTUZPgN",
  "key13": "4xGPGDnkPy3heKFd5j36Q6ddRrmwm5FrRAHiDgSF2R1q4BtxeS8S86w16h8NBB2MjCdDJ2R3EAHJ7yQShioJXMNY",
  "key14": "aVBeDbYKrcjhhnRqFvKYdLm7vHMMeCF92ScwHY5CuoDATypWUwt1tisX8XirgcWfusDv9H7sjxUAxbeZvHsxPNy",
  "key15": "4smVoirZa8RSo17bzGKi7DCvfjM1EZvzkYLZ6WuRgA8SZwUBTgkuLCzfmG4pNMwZSUeRDXDyN7sJi5UgDE7grnsc",
  "key16": "656Po9ZH4ZgFNRyN2JnJnCKt1ro7hVVqzyNyYebeTajPBHgvvdMAdnb3ftz4dZ9WYq4DUzp1e77BgDCWWR3aTUY",
  "key17": "2X9uhGTLxLapkKPmYCf6WaojReWy5thqzPe2WorSsJfQHdTWaW26h7wshjSCMTGzepAHgLtdjvBuyXXBMB3zfvEb",
  "key18": "3xd4VkzSvynA6YDwCZCBaR1eawKuE3dLoTgA3KhS7TvLA8fmW8rgDFEyfzyjvGN8PvWiA5KsBEqva9rWhoVznHqP",
  "key19": "2FGsnXGtS7gc1LdrXKgxCUrWGP9ifNodsE2L7E3WXa1EcjMKVq459CUen2caXuqSVuJWY8dxHAK2tGUSb7niGeYk",
  "key20": "4g9TRgLJY52tQkNRGb2eV13z9R2bfN62F1pGePEGWFuTnrwS9FYTiMWNQHw8vPPrBpjtdvUvQd6322z21e14b6w2",
  "key21": "2unkZYFU9Qig6gdSnbvCQ6kcbaLwKjW7LZLWeJT3i58CmhtoXCqbuARrcvxFHDvX3J1oS5YHVjqAkZmgw7vgSezA",
  "key22": "wr9Euy7ZeQBSGS3vTWUinkz3G68nix47ruaJKNn8UuQViThdX8PumWKDsCcgWf3RHVvGuKXhBF1WcVRTZcYpDDM",
  "key23": "2S7TWijWyLQTRQkyoBBUA7D9E8rvB2t5XsGQNienvCNwaokp6HJf4h89xDrMdtv6iFWdqrRwbW3UXyfmFCNMiv1U",
  "key24": "2iJiwbBQCLtG4d2z8Gdzr5cVYRHALgbx6uFVbhfKzh2cY4N3b7KbBBkkS6VnuvEfKeACreGwPKy87KNDDFiJj5HR",
  "key25": "45oH5pvtW8FyUcAbwd1dU4by3oA7fcz2HvGJCq13YVYk1sxriajpEBPsekkisibKt1tuevaF38suhwA1E34gbj3B",
  "key26": "39NP7Le1JTFuA3TAiBwd2hqMvkoWsredFJiRTX5uKKrkbUv4ZocLBw7NfkgFvkCRXP4NWhKkC1R9hZC6ZEkQcEyi",
  "key27": "5XYDFAnvxrvthFxB9LSnJ8GKXx674DYiB3eMWnhwSbJcfmWVnVJKFh3gPgQM9A8eDHUFkN5QrvFVA913nTtnqT2x",
  "key28": "39MySBVGoND4kjsgodVdHSTJSAM7ZaDhPyg7wBtciuwKNixvz5mqXTEUohPs9qGpWjs6N3yccwTV9oAhRC83UnhR",
  "key29": "K9RrLGtpqP5STARBSMk1QQHfxQWHpp6mFPbXc1SUZymfKoYhruUH9BKaE2ftSDVZunCWdSk8CFQksRSXRRcuH3z",
  "key30": "4faAtPCsJynAxj1tMPyw9BxcnGsYqce9SidSmoXtmj9mR7cinpxjUJ649asURFL4ihtGtMLXZ5mFrBKzMXpN1m5D",
  "key31": "4a23BUukkc6QND2F5Wb2SkRoguC6F8EqA9CAvLQkg4ezLgiViG1kgyQdQatucE5WzzUMABAbBsvfbhkZDeBVxgLg",
  "key32": "3JtkehzgaU12zR3f8oBzWRYufoPtnZcE8M79vSsPGoxkGiUDckyeHY1jp6o4r27tBu9tRrg864ZSMvcpNd8xKiy9",
  "key33": "4VXANKCVcSHEHWaca9p9i8dzRLk7XttW9fJ4G7GxTbuRzE5R33HHuYXjTgNQq21mSQeCu9JqGpxTyeKCNYdLfbpe",
  "key34": "xU47yAt7ghB17fxog1gWk27QLpt237PWCbgB9Bviy4XHc5MwWCJ9FbGFnDxfqPWjdefpuRe9xubRz1rjgK81sL2",
  "key35": "2kNGWf5f7mbyDiPqjJEJRodtG3jyHBMAo2RVx2r8WnjM2F3Nc774QwLLTkavb3jQDyurH1RAGreUjfhzRhY6DiR"
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
