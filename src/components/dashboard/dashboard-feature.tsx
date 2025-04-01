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
    "4brVF38keBc442V5eu7GCtPR7DYyGSa3kZ1wkr7ahhuVSW4dM8yytMizC32A9oReP22P9SjWT86HGJe9LtGpvDyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMz1uge4wEZVVNG9C7YYpS3hnWRKVDQypY8E1HePnGTYj4D4zZaybarYVqbSwnd9KwLF1YRLpju3no1XFmoQdxV",
  "key1": "UFyf7RboUNcEvzVWNBgB3dD4sMXzrpXwGTgUGZ8uVM94Ee65HDVNdqgVxesBtdcQ1P3A1PcaYNUJPW6rpaRtBTC",
  "key2": "2DPVmvcK5vUQ4xLrU4JFGiLf92fz5oMaWRVM2ocqdrQ2sZNkpnrHvbqqjqwGbkGuu25KQhQFEGBjEcVEQQnWTk8q",
  "key3": "5T6aE8KJEMQuKFt7hLGCpbumDJybCcgky2bEpQeh89bYyhmxM2TXchqHTuz38zWwRtSvC6VScg1Bsrz13yN4gUua",
  "key4": "2pbXU3BJpGuSitTGjCu8oJp1VzG6NQG8QMGR1UNPDqpXX3hUJefJyFGKjQYXbX2sAPmwhMe6SYQENYziKdN6pWWS",
  "key5": "5ZuAeno35fyorsAFYjSr5g12FKSjyLmuhcVJGwUPZ2WCD3xpRfPL7xUaNTsgh7UcJrSz8Tf2auDZcYYKqAn4kB3q",
  "key6": "62KLhJxpnr6n8FqTfSRDNKH63TK1JvHffeC6tymPPhfp5phDn8GkhDiQee6txyu8mSBbh6MRB7eNMWxPtP7PjJkN",
  "key7": "3WZLey8tY8afW6aq1Gcujaw31K9VLYdeGDjATF1C88aq6bU4c9AwRxvtDxrJC1vVbxDXtefHzwPRbe7GVW3ttQk2",
  "key8": "3ktjMBse29hBTbdByHpAK3dr4LbtNTfRdz7GsW8F6wuckTwMqPUNguY31hqpz1uZfits9NdNprxRSUJVTudYJEnj",
  "key9": "4ei6KeMnzEsUivLRXar4w8PxScJkeaU4JRPeTuKy1jx6LebzuPNBnyTU4gge4XEWq9WRCLZzPsaGnHhtHKjfn415",
  "key10": "eN1NbmaYak7D3F2WfgCWFv35PijDrvYJxy2XD26tZbgACa1zPSP2T62vBCqPVtn3RPp76nPoKSW9nJV6SrhxdEp",
  "key11": "3sTdP2L422bGCLps5Am6PtbcKRui6bUW6X4V78aRtSuxJzK7fVUspYTD1qmtJS1uevVzFrkZe6xcYfmYGkAeXC7q",
  "key12": "5aTDrW3Hm9rek37urGkftBceyxQZmjxnpPSBUE2DyQycrAgnEAmNDxVqRc1oacv47fTF4AvtqTj74SfsvfYgas9H",
  "key13": "4Kx1S58E2rmG1CurHYG2A2rcMJTCRGLvrMtt562xPCNKG6WoNnS34TFcbDDptd5cneWfUJ6boD86G6TGhae3hi1Y",
  "key14": "3w5JyZoJSr7jWtm4MHrqPwXhVkgBKeoBDzsK8UpKjRZRVgXjhs29Xas1tgKcPdjYQoZLkDkS9D1a8ZqrhXH5pLtU",
  "key15": "52hG3We7nNJ8LdesfV2eaB2D46mqCF21B2YafaGNiFVyr7GJzzYwTVPJsJJABDZvJDYoim2TCz9AfTKvTCpecspK",
  "key16": "DvgpCQm98ehiV5V55goQTVFtPiBAChcpsyzyksdn1Gx5Uj2koyKym1Pssho8Xgjj3GR212dZ4fBJCee7Yjg1bmB",
  "key17": "2EDnY4UBgPAbz3JGif3QpVtxjmBP7toc8Hu1mVMTnMC1tqpjDhc7d5pGPnZiDCR1KZfBn8qAmRYuiaX2PcFMGLFz",
  "key18": "4LiuecehoyqasSRWT7NP329uu6CAfQxTjUxi9H7nYnsPqDUmzvNFPqR5XRCLoJ5Po1B229c7GMKGEkhSv6Z9gMiK",
  "key19": "4sYdnUnPWo71RisrwxtyY9BzJ8LE9dyvk1VFE3Qim7bnHvdbqPBUKZWMhWYPWcNUFHxKrDXULuk9Tj1u4heziQpP",
  "key20": "H112eUYUJ1FyJLq8db9HCL9Y2kPUg8A5Behs3m8i7pbnSi3PgdFKiH2nMWqFfQmyENhGAVaj1i9ahHc2jR6W6BU",
  "key21": "2ufKSKkTnNQh9x3Ho29ys3Z6i3TcG7ET7RbSCz2FkQfeDGr3w5C5fPjY3Wdd3VQUDrYnzKUPMvJrWg4FJk8cNNrQ",
  "key22": "2UQj2YSEurPWXT2jLABbBFq4YmHY4e2bzxNdx2eBtN4fhNnCjmqpMGgUBCPmLvVo17QpfZfVndtbAZCk9EhPjDHZ",
  "key23": "25N8JryhhACshDRmmd6ezv75W5WAqdRZQd8EXrBW7PRKTBjJN84Gd2Gs5oK6zmtWnKJgo28BxGszdxFF9g4NMXfN",
  "key24": "3TVYH8JLSLDDVzv1wyspHtzDg8SCsefT1uQ5w7NovJSiTHgNQfL5kUBwiEhTdCwShBx2zyscHwZVWny2h1M3unCn",
  "key25": "2JkXH9QSHSGbybdNG3YNfG65uwE667FFS3DFcyxVjMUVSginURT3j1jGFNgDLVX1BHjkRCMrtgAArf6BD5YVawa9",
  "key26": "5tC7PnUnJHsebjTwrywMEgfnFvUjSy6sTvkEjJVDY5FWV9eV6bMgrZZsu7xStR59rGzV1Ar11ravoSVWDXiKmaSr",
  "key27": "54vdgXP7xWgNfQmAetWU9CjZdMhaMoruxTfGmPxW7Hk6xK7b4g8WERfXKKB9Gkg9HNWa9dTx11ieEzxYrcRj593d",
  "key28": "5v1oPzu62sZmNGRdJkArfP1ziZYE3wpiQ7jEv9w2acWfK6GP25n1WUTFJEnS8oqmfDbQuknAReeVjabnD1H9rpoq",
  "key29": "5SA8igdcTnij53wKhrLUiJLy3SqvFnNDvWKR6scs5aUxaSewnDSwsMXeSWS7V2c4oDwRisLkFhKFHjSgN2JXnM3x",
  "key30": "3co1TTpNWGUVrLBYoaNkVtNyUhxxsVUXyBgzEKYttXiMtkWKHeyKwq6S6MJyTbVHjiLLqYQMNTBHGQ6XFr14QV3i",
  "key31": "4GaDENNSoBrbA4psi1AbiesnwAP1jnhAktQwgdiJb2fv87k1HU4bzYBk8UvmvK13kpoTXB7mF6EM1QL9MSRcyzjz"
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
