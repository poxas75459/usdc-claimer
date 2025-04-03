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
    "2uhWH9s87TDeLNovTUCJKR2AcsKMb2EKiTKaq5LHd9dREAzTmGR88b1edWH5dcctGGZS3vd5je6v6UB5LV56Xg7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYnTir9SZe9311m5GesQbp3113nwz7Muyp6e1gWGy9vvhUGFk6TD3NiC6G3uqk6czV69NVvpZB2tPQG3GjbSRv",
  "key1": "3yCsmBP59fk76E8Po2KJefzn3Uir3V4BZwastxWM1ALzuR5foPpxQYyC3UhGVEc6m9NcAxVFhPVADf7VZJXQmcei",
  "key2": "cxKjMQb2XFDpq5KDgjvCArWyJcWvztJNbXJ4ZaATiUfkjFCsJ1xmBkePwv4DFY7JP5w7egvi6KHRoj4d6vUffMe",
  "key3": "Ao3coyQfsLkUQGSNpJgEujaf4SAcAoBi1E3NEZaQ4RJv2k7o9JrFdJdZzCPt9HjV3Et1XZZK5BHY7GCHW9zEPST",
  "key4": "2a44EwkcRywkP9FzJmfmSBC4Ui6T2gQw8hwuejcrrHpCZr8ByeDvENJ9mii8D7QnackiBH6CfyN67NUjfeEuW4Z6",
  "key5": "3EwHstAj2bG3ugYdWytNoKw65Fa5bPocJmKR54DxJu7ehMF9zs2UQMnjFTVq2gziV7Y2yHL7x5zFKwaYiYK6DPgk",
  "key6": "65VbKhPfFMCUNbjhB6JXMqsTSYWKvM6u3VPfsTQZBRTDwrq3dfjy3mkFzMiFL16JWKSNfzNyoCCr9FS9KgXcvtcV",
  "key7": "3MeqpKrZLLRbiGKyx23tCq3SMnAWKC5cCMXdsGS5LnxrJWh4YYmykN3T9SSkP5AJePfoPejXHThD1VvA9bPk6oDx",
  "key8": "UF7ghTSZNAftGnHELsjLtAbowUqKsT6f7oTmHyrfb8XzXieR9yBpwavBQgBY8shZj61zaqEcXa8kfCzbp2Xptrz",
  "key9": "4TdwCFfjAUMmrkQEaBjPzxocjQcebywG2XxnmD42Ava6AYLtTinXW7EVdKx1DLk5nxyFxHS4EQ1if2e6WPPE8R89",
  "key10": "3YkbWntYkWPK4snJcWG9jZjjGKJwbMAsi8W2TCvwRajWrj9xBtdxqy3Xdqd3PpJjLBiQmyaou6mV7V7yhm3PeziV",
  "key11": "2zre4VRujb58ZddK1S1RKAU6xn6bXU5hpqPVhpGUXF7kBSr3FUnwChWU6ymimWkG9oRv7B3YAmiJPhn8D8UYt35k",
  "key12": "3ZZv2GRTuGKK1KAQSsdSJPBCsoDu3f9iyHhWeEGcWsfjVE2DYzHisErxTdmxb7uoFkrXEt639LkpALUXfcmrsxwN",
  "key13": "m3ys5DjhCWH2HyB5zNQafsaWrrRGADwe22mqSWCmoGK9tgCV3rRxVGA3AZBDdf1WZrwi1AGFs8ivgeN5qGxWcMR",
  "key14": "3c8B6a7i8GeEonU6K4mbrZRFqYs9Z37cQpnmX2gADZZvH8fMh4PD3jctAkVhqrdJaRmz3yjbd1sb2wd8g5cHoDCg",
  "key15": "4puooieAQQeiNDqunHUP46iyhtpK5cVhf8J9C6hWD3J5FNXW6FUwHrjuGtUFbjPoMpMd7FGPcBmjHnB8ms6icJ7P",
  "key16": "KxLwY5ab8dLEfEAAkh8z2Co9fr3ARQf9pS3D8RLppDamBcpC2dtCuq6fu7NHGvVBUEe1f42T4pdPNug8gRrzYTD",
  "key17": "5RJsggoF8UCssVSLeu5BbVadEPzKdr2R7yMpGj83TTxLeHbccqecxvnN4NAxxFKbhBusj73fvngGFmD1hA6iRWoN",
  "key18": "2NPrkoymwag9kZzVi6FEMfqCegaT1U85tD9bJHsH58azuhyGKBdjqYZvo1E6dfXMyC5pEZLYvkDxoTTwUt6PfJ7h",
  "key19": "3cZVZfznztYooeEV2SVkaVEpsr54gwkb6EYwjcgUC7PeHo18AynsuEWyioGQAUM6mDvV5ZmMShCGf5hBo5uyxSGa",
  "key20": "2U8qSuUoUG9vmxrTPRZ8Kw2rszdyndCKDjzwUPPdrzvrvZ1Nr6TtvvkAHLPi4T2mmE9L9z3EAvzoGv57ix6xeqok",
  "key21": "h3wqyNP55sTqV7aBVTfT4bzUqPMN81sHFRWc1rFFh2y7pbUP69ACMnVX6pTAofjczMZTqHPJfTDdAaxzR67vVu3",
  "key22": "461yU9E7NG3AGhw2zN34Fs49PPrHinvewRs5EnKHow3LRbsgCuJyyAQHK3ePBbR7hHRvepH5V6TbWchybNWXqG1m",
  "key23": "4vj2L4byzfmxN9HxKokM9KwdJ1aZVejx3BnK8FEmrWs7ASJxmUqEqzbFesu1WbWgfevgWZaxH4jAnrbxMwozjnh",
  "key24": "3R3JkwacLK7YzLyXyiLmPC4Me3kW5ojY2uzXM2w4gMC9Yc3iYxjADss42V7PgcDqX2ETp7imxFgVAbQmArqiGEdj",
  "key25": "JZ6Aj7Ue3ZckpJzkiRGyC74EhVbLUyvAK7WhiqYvsq9PharkYK4AyZMHS8hA6kxdk3owsuwfbc4wv41GQdQ6Kg1",
  "key26": "2utzpoDfvSPj2e57HWXZ7sTDDrAu6Q29h8aSxUrZ3frvafDsTtWwghGNCU3kTXG1zN6PgmPNkshVifVUCDaM6cmu",
  "key27": "6tdCcPv1LEGuUxUNuCfMhxPouFvvE3wiqhcPytYnD1qBDNcGTAgYeVxF5hGPgk3Pc3Cgc8bs9J47ghxDQcTSyhw",
  "key28": "3n87FqtcTTYAzvsoHvpzoAtpbHQ9QjDUqKaZnnn9TL2VwU1yXaPG7yFwdMgDNWsuJr4J4kt6UFhWtNdwNCPLP2RS",
  "key29": "373wf2M7349PLZWBs87DTwJ6U5M3obF5FGHgiAgaoyor38vmaQqyvF3VQVRJEvcKLcLjMSFxXhQae12uHQyiwceE",
  "key30": "S77gW9Yxg46r7yVB7BsZZaNzFMiB9kmnQik22tKydUqkNjSC3qQWZRmj5gMC9uMGZfy625CvcmP8mf19cuXQyyB",
  "key31": "5h3XecPecNAuiB4U58t2Nirm9JSPaNcizGiVmpoHnwCGq8Ra8RKAtqyya25nCU4dpjzJZyNF1ZfgW2b14QbxXu4h",
  "key32": "2qLqk8n3cNwdj7jdvo3Nnj7a7AdEij2dsQcQdKNBxdBGPuspn1EsQ1GDfhnKdMfbXscLa8jUT1DxjrUsYLYK7Y8c",
  "key33": "2GZPLq6mj22NtLQjH1EQSpY6Q89t8kZrPhShdBNgLpPdWjzaotxf2zqsnRbyFVhevj6PnXsQhEKoPjyCNvLRdsJp",
  "key34": "38396prX4UP4wYFuqUBibMusEgfzygLmdLRPX5L8TDM672FCuTFpECgUCwBxGYJ7w9cuGu9Auy3qnM5ijqekLhej",
  "key35": "5YghdAKaVSxCqSe5SHB5xzTrK7fbbrvNAmP6CNfKECCX4hY7Aor2KAzvBXfZPPQio5ZTmz961nTiawMgKdMRByoM",
  "key36": "3d5YPzgvv9A5WyVSiXEsTaS417qj2uqQZdPB13hTBdLgCB9FhMCc17aFavMbh2QRwsR2kLkLmWqM58w6WP1ZVs1h",
  "key37": "4nkxPfGTAuCF7NFdgvVVdZXbbD5515fB4C21VLJBgXyZgWhozHU493RdQKupJxXmVFgGXT9obkGkyjGpEhmP6etW",
  "key38": "4d3d8WKycicmzAydQHBCfFzFrx54NsFfJz6X56irK2Mode5JSvBQ4muSD5N2yozvQc5KVggzFXfpvJXFJLcCfbj8",
  "key39": "47jC837mtpqVZnZpBp4uZzEuoM5iEdsQfqqKgXpnwbs11CfqpA5ci4z356YKcoRfvhkjZ6rPXyTriiJDhBmAsfKk"
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
