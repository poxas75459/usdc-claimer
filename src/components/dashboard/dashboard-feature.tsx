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
    "2kTw96c25hoSgRLGQaR9MJ5YDhLA3YpFGP9V42esCFkUea1QdKoufdD6NXjDfZeTm4kiet9j4Qp4FFpRcAMwEx1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtqbBAaySB2EFk8y2NzaHRUvnFU1dNKPXPSZYjtt7nXQqDjwVaj25cNCYfkamt6nu9C1zsS869ftYPDxVzjJSzc",
  "key1": "iQqYs8SptqaSELthiztELRcGvmjbxSHgm8vxgDp5rV1b1hp9w5nCJ9rjucoer39bWJ1fUFSqXVpHXxkWCriUREe",
  "key2": "442A7kdLuw7emZH78pRQV2HzPgwXVSaPH1qUSp5cDsbbFXyaWUkM1CfEwNuEvCq99xyD5vZzFB2FF9jjeCG8JzUE",
  "key3": "FnYHKks1ikRBrN8ueXSYzP6yLTjpNVDsWWwaPS2ywHAD1L4cEHjpQ2QcRqpxzySK5GyuiM29qLhPHWUEu6YTzZW",
  "key4": "27Qc224EWqkZz2hDd4UWZzDP35LnsiagCy7yiqtEjdzR25XMx47zxyQ4ubGZ4Qo4TP4CAhfjEeJtXvP5JauLxg6Z",
  "key5": "5nJAdoxZFXwKzLGShJS3wmZoVaLzjQ5NDqWLZb32aDSNSnKLS4mzPPeGaNKp41W84wsskYcdKKDzsLo6c49NRLXF",
  "key6": "4t9dKz4XNDjWju9rYoXi268KqAnfjwvnQ6G1jDaTg2UrQEyVh58nXEyvxQj8jJc1Ku3kdoq6joCM1aPXFokuGPB8",
  "key7": "4ZEMhthyAc6mz1t1RGmMGGV663wbQzwgoxB2mcSoSDWLcMqcvnTv1MUdrb5rasNFrgdUXFA5SQUFeerbcQuCw82b",
  "key8": "mE1vD9aUpFTZLwvSxEj2ANStWE8w76w75RNaUriMptKcWudg1LidVxZJz1kXNrhpqLzotJ2kPifsCVbPTWVK9PG",
  "key9": "4VaZ9hKakChqEFjPEPqVcaYstJ2GBiGJYBzTYttRSWd6WnmCXhJThV9YH8txYgYW1Xeq9NadAZEmDpTjSSQMYhpk",
  "key10": "1FcXZdJ72LcSapUnT4f8RwQ3igKdZKzJcT6Cn3vmpBjdWJMeZbBBfQrnuvgoE42Zd7r6GAFbhyxaLH969jp2mUq",
  "key11": "48dSQAeEM4fB8JcdVX7h5bEifXzPqd8hhnxyqnYmQqHkuEBNQZc4JpTAXEMbLPs7SkUn4jmdWZPoyRc2LkaXHUJY",
  "key12": "5ucY9hBiKfccvb7xxmScCYdrbPtRqR1dXzYnjkWXMqc2FaCuXQNtKoCoJfBya5H1ycrTNcMnCu4Dnu3pyUXGwQ42",
  "key13": "2gBdQo1bhy2BJNyoTNg2xCWW8SkFRvhG6rP5EJJTuwFGTerRhcfMsSvgcYjXpRx6N7PT23BpaQgwDHFAtEZM3w73",
  "key14": "46W2GbhmAjeEiFhqXTGd42yAmX2ZPYiTXT9SpJ5UgFFAguhgW5YLFE5127woFDenBS5RHDv6Upz3Su3Pinef6Mg9",
  "key15": "5sDytSU8A64g64M8avxN5C9v349DT2CxtxdYHFrpbFntJxhZhtmAiUM8hXFZtrfSn6aWTgTM3W2oSpqXgMopykL6",
  "key16": "666Vbii1kk6sf6dwUSAVkwv9B8Q7rdc71UDhxg1vguZpzHgvy1djF7xQ1TXJNpqV9MxVDj5LBayq9YNXgBdV392E",
  "key17": "K8Z9GVuLUW58a5T3Swsa5nzfqTz7hWg4aiMBTPgbfm5ExeE17ZThDJkR24h7ZpkPJXSr5wcckhLghCJ3pUHVSc7",
  "key18": "3i9hGJ85smKUukzNVqmAkxatJmmU83n2WNafZNJfJfErKPrpmWYVTZN9oQAQ5rMTWBMLozsA4UbG1rxLbGZRMZEw",
  "key19": "gsVex3LjnEpbRPudvYbW6hhoVMtZBE3JMZdALRNKa2rEJciVfyp62Ci2PXvs3833Q6K119dd1hfW9BJxPXUWtqq",
  "key20": "62GzRqzAmF4o1Y9mF6Jp9itgUfuPjUxDAmLQx7CUa1K27Yx3kgxnnoWpCUK88YyM13rzV8ffqBRHAAqZUfQkrT1M",
  "key21": "4HJ4ozSQpLbTEH2Voq4fq4KqvwKrjWGJRoYsmFr7dAHbjztcXuJW1UvXtmUaAwiF1Vki7wTZnSk6rzX1BfUrKUFD",
  "key22": "5GmqdLY2rmxN2BuVWS4LmfDphzLnR7XDyidKnanP5iWoRUAwg68npA5R4UR1RAUgDhXfSprJnDmigNV7TA9iKTFv",
  "key23": "3ooHPytue3BE6zTFhtRPVyrGjW7Y3QW42skivbbhjVPtf79twarj8kZYxxcPYjuxQhe83UpxdL2WvfTpeMgMTMFc",
  "key24": "2SqJzVq5J8K14YAnEF3eWhpBZUF888uYnvjQq4xtcc4Qt4Dep35xk74vYZN7p8G3u59iGcU7ZPasMB5DTEzVmJ5j",
  "key25": "3wJurdW1VCfayPNP4iFbHXEDJPuZA5vzPBaBYdyw5TvDDRWUVMKeGzkBEdR1Auf4tJLq73CBVSgqum9WGQVLPAE5",
  "key26": "2yJQk94SwiUEVNyDLgGLoFtcwhyCnZgxojeE6dyUJQt6Dz9LVJxt2QhixvKkue3dmL7dRes6wzv6igeTdTPWbq2p",
  "key27": "A4ee3vXiYBg1GWS5W5vYknRATwGdYH1zaBpQJ73nD4aceb2jPzAqW9ZGBZsMmr1GaVABqHy9qzhTqX83TGyYP6P",
  "key28": "4DrnnMgT6ssxEMA4we7xv3XzkEBC7LqYrJJEZ2mkn3GdiesrWovXGJmEqQw1zzkzBLLcpvvb4Dyvk3C2QMhLgHL7",
  "key29": "3d3rJ4nDR3x9vKAuMvEzGzvb5aLLaVGiig4dHdepAWCczJjTqZ2Q738iBVCtWbifMbmfPWZQjarmypnh1fwGJjBN",
  "key30": "3zaDaguFpqs5oHj7TEqiu8s2ZorZmnCGBfdZ9dS79GauxPHUmCtygNjsgvYHV2oiNsQFkFFDJukUVt2UMbEiLCah",
  "key31": "4N4ErHTLvuof79XraC1kE6WFowzViiaARCGKvKwupUdyvgo6YecgmZCWyAmC9cDkoEEbAS7Nn17Ub8a1UT1uwAsg",
  "key32": "21nLcJMgRotzaKr3GnvSgfZ9TyLHkzmnHeKArrGygSa3k8qWQ73RPvCreKJapRXBLCqji8ck5JSTrhpzFDQqiRJx",
  "key33": "64eX3AMW6hfmYzSox9tGtP11NYurrJAzmGQpobNg4En5t6hk5x2omMF9EMNQimYNuTHFKmiBJ7W2wn7ZwcKQpaBh",
  "key34": "p82YijiuYqY5VAAtD1uj6KyrjLwH89ceTSggphPtFKsXDNKSa9YL7cFgm6Zy1FY7E7Yr6rnLSRvQRZZt3vw1CAa",
  "key35": "4f9u2kbEBVvt8FEWfh6jHHJmKgCMHdpXbPPDwQDNxSRa9amzFyVuPv9VFEobMHEZwbeXk8DTeKw1CWB5vkChxozK",
  "key36": "4poJEQrPvApDt13LzoPWDx4E8NEsSAW9qokWFxK2ApGavzuGc7ZuVEjXUNrQVn5B1E3XAQx5hB4if4mpPyFupQ3a",
  "key37": "5XDNihefif8qe8TDooofyygHGafp3F3HRo1SCFMEqgNBzXrtBnCziH3azemSGZSb1NBL1TVZMjyEkqDjhus85bn6",
  "key38": "4KU48QDXZw4j9PskY9x5BgRwpou4s5Z3XzGGmveL9ujmiCxaD3VzeYk4JfAccnhhEWQuNEA4R1x94H7CyTKwLGbR"
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
