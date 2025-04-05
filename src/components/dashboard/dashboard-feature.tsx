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
    "3e7pk9KaeJqzk6EuLCS12Uy8Sq3Gw4SpacBrznxVyMnrtZGcKMkWunEz3bYF5bQENVkZkHzoQAkfc26RnLn7qv5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eB19Hz8SVMTW3dWV6gDjUAY3JSnsCeHDU8ws4dku3W8R8Jew8nzETVGQqtmSatK8mXv8i7iNN3NHbkyAscixgWV",
  "key1": "gNhTbRVDaUnZcs6s5CtcGoAshZmkUpJpZAgPnw85p2pitYn5soiCDB17pNdWotwsGmnCCyPnFJG8FCZkZcYxdSe",
  "key2": "48WD11cQfF8s75tEGfZxUfCraGZXVMCFsWxDjEiPc1WtXE5wV1UWkMjrGxUy3kKGSbS6tVYBZhbYyU7oKgZz89pK",
  "key3": "ENaE3wepzuiTxDNNmbYKFxCZrrLybD2qeUSEV4z1UPsCcsYy3B9ZnBy3Wpbf3VCvyzeArHLMiwhSyGB1wbS2ndf",
  "key4": "512WgpqiEEDY4ecBSHeD8rmpZHRmfNNpuvMgGr2momVzfcB57G9btj8k7GycUY1VvsWWqwSyepQx1cBEgaua2ibJ",
  "key5": "2QUm6Mi2o5hVu9cq9TFtrnfk1DzneAMyzUUCXaVRUVaRxvNaF93GU6TbtRR5Z3dUiFKjJ6dxfrEZNjmohz9WpBbX",
  "key6": "3MkdQASaxkRMi5SaPNHTEBN2oAMNDjYaMt12ESQkS7ymEQPW7nMNWY6qin5SJMghoumLSbqFkgLXTn4PnB2BrTn",
  "key7": "3ieruPV8WCkV5QsAEFj8YeBue1fBmxxFkVbcE8iY2y9sAE6ZEiCsrRCN2RV9iDj14qm2Da2LXKsLawSD14ZEHsom",
  "key8": "4jqkuEZttRWjHj4E2Juv874oztjDqKpEasL6SkyYQqmL2d8hfqEx7SSAfgUX6rSq7CFPUPcLM3YKDc9zfv62mRDa",
  "key9": "3X4rS79qbzmxX7vTwCUvYAyTy2pR8SHzvAD6oDDX9n9DMKpYCKh96wtg8B8sA7fdjKbpmcFwAyj8ckrv8pDbnbpU",
  "key10": "5F3QzRwV9ExQ8Xqk3G21LwozXy2UhiYumVWQ5VJi7nGZM8VujGz2uSzMayTDtUJqQWUmTbKQigDQc7WzPyjhyn6H",
  "key11": "62R8kZjemPVocYLze5MZ2ev2uMNbVoaMEGgiEAtvD3XfotnDb7J2MyhKDPTjYXShizfLzGG2jzgxjcUF34J4B5Ns",
  "key12": "67evnNGY4y4dRs2sKvob9ctWVnNU4EzK39RiDdK6dw9ucEVNZEpYP4Fjb1uYHsfzX1Ah7xxoKoktnuHLkbeHTNAi",
  "key13": "P4nue9JSzGob6ztdhtaJXgL4HYQVjQCXdQ7U8vKGiCvJUBperprWrtvcrDxtAo69kE2C6MrTLCC9zqzVLHo8YWj",
  "key14": "2bn2ysBpU5EQsvBQYq4T7xHbv5b3BjJekoCTX3XXLZjpXoAJatpuuAJz1YYZ5wxZxvbLfowVf9MRJA7bS7S2st6E",
  "key15": "Z1r14EsC5SVT4ekqMJSGX5SuV6hW4QJPg1k6PcZ7eXs2JYeR5tYwS6J7gn4zN7jcLuGGdGyBx3hmBgpXZJ7UPaC",
  "key16": "4LPCthrS7HiAxpBr22wfvb1y73rh6an2bJY5e4staefh25ofik7bvTuYF3iHf6EnNcdFN9hwwDbY9YwkicyWSzQe",
  "key17": "5jUBFRunbsDdrwjhrPBivNBrRTSUBaZ8VydC7beVtceMbaYVjAYh6vS2jbNaZquStrergr415BqvENfcSgUDmWm9",
  "key18": "6155GPKKKcQjXZ4XZLsF4iEkPstnyFesCMfsG5MJUnASViYh6s2YVJmqWgj7anUSQcbGrNpwgsTQL4VpUB9UXQRG",
  "key19": "53kVhJEWhUHtzM9jGGHo7sfp5TEDo9gXuA9CyBmGEyx8oLNKcBNAKuphd7qp2aEwkPMgWZvhL7ZC5pP2uHSSW3d4",
  "key20": "56quyfLpK8AnEq98MrrAeH272ADrtmrmzHv8DDBnfJcmzu1qDym4RURUR3bCjaoRwdGeiKK55ZF9Kvu7Rhe3apoE",
  "key21": "4TugECvS6fkBVty6zxZujgHhVunACmXb2FndaZPR2im55sXn6igAn3UTWwV4zSegSRcfvWJGF8HGkpgrvoK3VFoR",
  "key22": "4tACHPXhq2zJ2StxFwmGtk2ga3gomiK1hDfhPsydi8tLVKLic7ZfajoPvTXjqLQMNYXaU5tiJuqieSRzbYsJjiEh",
  "key23": "5mzAgcuZ33XtEfUL5mt5AS6Yc5cGrfH2qf4DkYnzw8DUuEtKvtLD9ifTxa4646UuCX6tbgDnm79ZDmgKhiBKKeHA",
  "key24": "2DJ335P8uRbnZwjTuiNi21ReHtEg2Fzm2E6WG327SEK6o69MTiJjLxR979VvGYw6ZaJXxss4M9fax24HdG4ECYLy",
  "key25": "2wvL1qQXqT2DU1PBijwZDvFsJawpRwNujBp37gxa6bqyvKD7h6Qizpvw1W1DpQMYmCEekDMgsF8crq2XgEP2Ymew",
  "key26": "5nY576Nx9iVfemS4akxMGKjjrgiuFzsCv3KoqCevpCXbW1e7wuzCkDSm5ej1ZXfVjmBB56qvdLth3UcKGuZw5ZX9",
  "key27": "2bW7GqL95JsaQ9hCSM74vKfdLaS5GX7ccvZ7fEUgV8DexhQrcpfmzwpWJKaF3ofjfrivjX4FcvYwPRvooFL2dKKD",
  "key28": "4iY31hWuzeaTVXuW8tecRRecTRib8YSd8WwXiJbXUL9cNbjJF5Z6wYK95SVDif7jiWQ9zUr3QEmrvwKTf77KULq4",
  "key29": "5PpPwLzug4A4RXqMQgzCtFkQ8FbmW27iSGHZPSZf2hh4RpVJQm1BPL4bXCWEHJWmvWTKmctoW5iijmvPZAeUei8y",
  "key30": "Z82xXnu5eyZmoW4kTUiqFTvXU6X8AzA7FSrH13QxHSrNUXWP1pHpD8w3qc85RAou1Jfz8RpovciCXPHGR4xsdc1",
  "key31": "3969vj7pvtwgwFuMxBdNe564Zpx7C1f69UmM13FjN3QhJzK4KzrgY2jSNrWUbM7hoAyX9ArgzZ4knW4T3VgHH2pE",
  "key32": "NzLgrgrVnxZVZr8Yrgjx4zdKUND2zdh4CPuEs67BrBPGDTypk6BcsQYLXsfC1did26F3UqafEL5JrfhutfPCPjX",
  "key33": "37haRcNxj6ziq1i5RXRp7U1fMSm89U5QkshC8gsALxPn82mrBGaoCqjjZ9zo5L2F6DBDkKEmRuuSFUrpVUD6iHUy"
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
