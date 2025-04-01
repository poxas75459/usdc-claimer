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
    "5EHKh6qdiHHQp3K5q7pD9sZQmUch9Bwg8KfhGWd5jgC3My2UJc7UCm3qw3AEBSfY3yk2BDugny43ipgizeNk27E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65w9AQWMw9xbD2FUBQHsaERC5EzVjGG5RaMcQwGdCtEq6cdvTujMY3SBZpWF9QKXuWviKED52roCyGaL4mhqaZ7R",
  "key1": "fhXVyXUw3gJZctwFCRKgb9gFxxtqi9o3Hc3BLHXMhcGxqRi195jzYD8r8HNCFCKVX6fNvaqDTyU6dqjMuyk2B8B",
  "key2": "511S3fvHEgYgqWmDXK5amuj52jqaqQX6euJ1dgbUUVLhWP1tXGC42Arcz3LswoVF1D6cLLy7JXcaf7BURz6muHaX",
  "key3": "3XnpqsyDpU5VkxmVCjYT5f2eBnnYXtZ6f4TPYucoPeXGMzcQxSJPniEwH6iqLLDeFViyNzKt9mJySgZHejXgCr32",
  "key4": "5LEUbC7ZoEPYdscU9bhHvXyWvidwnDVzTnHpfChGMuVEcqh7kzRTKPJZZixm3xfo5DPRqtEZnyBPS7jjvb6b6joX",
  "key5": "45bcSeixhcaBVwS8yWauw33xnVjsqwboS7LkyhPFs5zohvXJ1H4ScMjWP1SpqArnMxScgAVp5rtcFEFSBZVddBSg",
  "key6": "3XEAS5uDCxXepjJ3Mb2VHUAFWHrb3r3VG11fSEyV1RMsJo7pddWMPWsMA67Q6eDPmC5JEwpo3fMZ15tHrohBZHBJ",
  "key7": "5shVJFg7KS5kymGvzgQKuR77FjEZ7LDxvJqdrQxi3yyUtQKK3WHznbvdMFrwXPWGBqXBHppXgNEyEHy23zAmAkWP",
  "key8": "2ZXpZy78X42mVGBbhK4jjAMTsePjQVetfFEm9pdMRfBiQ2MeKnRziMG87C1LyzJPWA7BNsq8LkQMbVKjDuWDVKVa",
  "key9": "2XoRmbsjmMmBgkuUtAgAdAbF3CSagiZjbFPvnTLXJ4uFsjwVMcogfxUwUJsmyBSxDwuZT3FdJt7Axv3bWMgS7tdQ",
  "key10": "2CxydvdwQaZomeejzstr8Q9WcuzZcqJodFaNpMpsn2mWeQF3uu65QXznGxTMHV72SsFGN4qaa2XYm6MH1A2wH1pu",
  "key11": "5sThHE3Jc8qK1Uup17YtMUYUBXT535WGVRdgkvGcKxbXgPvEUxX31Lyx9tdqTDdhD9N13nVhpyce2LcLfYC4cR6P",
  "key12": "oADMi2csvCpApQxkvj4fRVweiMxTmi62jB9iEpm9kYHajaKQX9sN8cfGGEwFESvqrL42cjp4srCeeQXrDL2zwMm",
  "key13": "4DxqWqwCWnPKrETibQYuFjc9TZYmWqWhXgoysw4iTtJKehC8rT5MA5Rs2QRosNMYLQqPU7uFqVH99o7zq4K3rFdx",
  "key14": "3UyrW9fG6X3okhRZChWgHFA47g6nBbEE3RKT9JVBy89Pw7kLLVTWV6s6LFMYUBjNp1cMsRkcvgMWxdAC3LH4QuVT",
  "key15": "4dbtB3a1gVctvq6MX3ZJcZbqZBJdQAGEcvwbfVC787pbRGFQuBw9yN8mqvAFZ6YDfjcFvozCmFN5UwzEwM6hD5jL",
  "key16": "5VBRuYMREynFkrxFnSuDb6haFnPTrP9eFq8qeveYoKYNBv3kK9RJYU9g9vusgKxuebdXn9KRc58kwh9dzdiQAQAg",
  "key17": "3MggCSWDw8ubeRDnp8XpFAgXauwpf8bFqG7oV36XZqkdybnTQJ8ZTqebdZvrPEjh1NADEtAaEVKWs8V6QEg37uUf",
  "key18": "3TCiDRngHc3SuiH6QobSgxHcmPcEo3qM2iSKgi8iU1R1mZLPrk8ABDk7WdDt8g3hobmr44q7efkUfuYo1ghRUWgs",
  "key19": "KnyufpVASbzxVusZnkvbLXXXPvhZF5XC9jF1AxhSTh319Uuif5VEWrARQhH3zM8xpbmnt5A8e6Df4SPFsSW76nY",
  "key20": "4b57iyHusVkGArXSBQeikL1H4ptzs6LzejYcT5vWSGTr78UHhabByURWaknMqE8NcskPgNGPpTXbVN564T8Xwq3h",
  "key21": "HF8C2YYSanJ1pEem3ESXsYCuNpCWyvHxopnp4CxUgsaYh3UK8UrBdmLL369H9kUJkwtLARxpJc3x137hfExZyax",
  "key22": "4Baqc8jP5odBidEkRCB1qbE5tJw4eSzstnyfUxmqRsZhVAernNfkBmd7gP4jmpaxXHsc5xrpya1ygoDUmgM1gJLt",
  "key23": "123ZeDMJTVPDRXCbeMfPsqmRpNX8cuFvjKLM96fxdg3mCdtbG6qSToXSgtf4rus2yBNAv4gHch6ACLWnMSMN95aq",
  "key24": "618LhRzezgWBHbyuYpSnMHYXDtZifsapGFNWErXmrJohHGQhckfF4kFsiqS7FVQw7rounxyCfcfQWqsx9K82aiH5",
  "key25": "5gDpnLHQzSuQY53aXeLfQzqnUu1T7vaBsnq6b2pNMNNVortpQQXsdGP4P4evjYWuyRhTxMu38moKiqzpFLSL2eCD",
  "key26": "25hvJakYkYYoNaqtVQhFQpy4LxQkyZDWn8aVe2L4SfxdJgFSYmZLhcAro243uzpDeVKu4dtv8y2nftHDT7WBHiVd",
  "key27": "5AcoU7479g2srjBKwZT3p6kyFniE57cvMkMSyjpC5GGYHdd42E8NPTs2KCnhPyr7Wuaw8n84jzYWVqWxoP4shetH",
  "key28": "urzHc4KQpZdXz5icdX2PVhVtsL3RweURAzF2TL86yDifQmh6YLokCZadDVNctYsA8kxywU3Y5UMULki5vcVeex8",
  "key29": "3m7yHUEcHuucVqL6RQyq1io3njhrpfkPZPWgQRfRH3RaFzpdp19MAHycfFLKAL6Mcqd3Jxb5FsYJE8P8wN2e6vpC",
  "key30": "336T6jnsiYcL3gqsrLEiCenuZZPAqjYqsUGUGTBw4K9b6shzaEabKpKHmWfYnxhvcmuCu3BRaGFMMrebGhR2tuMb",
  "key31": "3n6XLZ13q7rK7i5KvdHH7TRPU3nkR9QQfjSCicbgAvhmoUEomb3sDQT9Lo6jFod3Wehj5HZzftJjXte9kwckkUHF",
  "key32": "3cGH75C9qoFVosma352Lma17FG3KvvMjaAF1VpJZTTNH6vBKXchsAcgwtuMiyoZ66wiDFgvvwru4UPzrfmbFhxy6",
  "key33": "4r6qXr6kSJrbqadJwwigWQ5SDrmnqQL5o9LFaiUNkX9Kr2aQbmTGda8555WVWbDkuMokDBtZ6kWJqTHw7oJmwkGg",
  "key34": "3KTGBwYfyxytmSfPt7UEK6rthJPT12enWBVakFeercWcf6F6TjzuaCueSkwyeWRRQwScv3pybsCqWpoA4UPWXssy",
  "key35": "5pm67Wf2JGX4D4qN4KAocFLR42TxWtq3EUnEzZvcV7mkerTjBrn91JP6HLzoNHnJPpHWbm7cSzQMaD4jZRod1we",
  "key36": "GnmGrW1LSYGTJumeqyWdXr2zsmf9n7XabprRSAekgNknHKdQoM4hpJU58sTXxe9Do8GH92jfBnt5zHnAYT48VTy",
  "key37": "2fWQbM2E5UFHrU7iMvpgdqJA8xVHbQcNNFvGqnHK8JqhGcyG7JXEptUnCG628GzAi1Dwchhd2eeppBfjeM9eodm9",
  "key38": "3VRoMe65GT8qxswWGQYgQKNRfxiuWFsKAPSeALwjXDUsocBPpSjcBDVqFq17ZmwHxQT5TVQpF3aDXejw13AKgQKs",
  "key39": "3QiBCNhRHAPBqw49fkYhDoYPMtDi1WWqsw2gK9YeeUhwU6w9VpzycQ7tazrXqiMTpc19a7cn1HcxUYYxchxUfBpQ"
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
