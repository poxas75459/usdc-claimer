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
    "2mmLbCsgGGcUiLp27pXxmCetGZqtWaAe2yLm6aEU6yRKXFcFfd76AAYbXW9F2ewA1vhqmk1Zmdf6kETDeEeRVDxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RCsqAsaWXgrQiXunfyFzWkrRTWboyWsLAk2EdA6X7vdLgq95o8WEr5gXQqPecrVgKQ2MBJdG8C74RvBqrzavnJ",
  "key1": "ymeR44N3D28ejKsYseuPeHsGs6uZwusC5SbgD7q5yBXsKZts1ZeBX122bo2NVhxUuf8tJY8EmLna32Lsgx4tgiy",
  "key2": "5nsEnso1a3y2UENWMJd9uJJmGBEbZ73DsqPU4CfAQ68uj7vTtJ64RQdgVbjn7o9vQVvFBRZfQnt3ot3EKgwHvfnD",
  "key3": "2SQ9uat4EWPmZVYGvXE8h9AJREfBUyyQkdGBJVgRiTAkK1zsmNQtwucULEYzF33tknHV7QovuNd43gKK3d3uE5D5",
  "key4": "66vNJSWTquXBMkqsXBSHKwgqUu2dZXrwcwoV2ePcpEufFwYA21vuSG6KiX442WgD34rbo8diLXLJ6LmPS8gSyz9E",
  "key5": "2nfAph3zf67kaz3rCPFfyBDDZ7GeVsJkjzrbwkuGTjATvo2FTHsGNaw31CWTUm3tXVNFBQmWGmzK1v57c2tYrVCu",
  "key6": "3arbxUW24oyoiQUNJk9svjoxkDuUgod5C3PF9YcQMxTHpziaDia9YJBJMoB2zQFoVRGXK9zG6eDoU53hcj8MMy8U",
  "key7": "56vTd2QjikUHqe8rdHkXTB8roZ5R4odgWMW8RJftrGHQKVfmj1gVRwJsNo16BxvTK5FBvp1kgwUZVtq8Ki37e2ts",
  "key8": "3Y6FCsaWXdvdzWPTLAYwLHMkRQmj6B9BdpKVoCP7HSxWf1gXmrw2XGh6bXwvNBWhsQuizwcVGnbYqty7c4Cigphr",
  "key9": "33ZzJnirvALY2b5jEqmYGQzepPEWc9Nyev3HrFnMjeNNZQHsW1GVoaszbUNSuyYvUGkLZdV8yauMVwHWtKDLRV33",
  "key10": "2XhfDzkfiAVAkjfS99vurGPbqebQCS9RGXZYtLtf6PoG1jpb2FDS6WDBJEfqRZzPpztTFuN4Rp26Bqwg96S6Lk17",
  "key11": "4355nGd7cGth8nnVpPoQXpMBMs8F6dMkNSHKm7448cYVsUAsQagxJWPBJJvr1gGuayDg8ghZJazrVrWamvkMtztZ",
  "key12": "3MV1QmS1Zg2VAF6yTJRMveA9myhkSc3RjK8QimiGhouqJaouxqmqqUGfzmYDMFMPXPqoXCgiX9JyB4FxVE71WULa",
  "key13": "4HSdXtJuGsJ2XVgtwuFKmryXFGxqPT4fAQ5d813WCzL1iRZnRkVE2BEbV6sj3hvKfGP55oqTtQrWaPwJRGc2qKqq",
  "key14": "3PMQDQk36TAfTdTZZAXwSkkJMoZXbaGZnwRfb7qd2x7doBihidrboizDxvoF7sYYn28qK6RqCYLtWk3LPcp5ynwQ",
  "key15": "3heaL1gMAMVH5PhoxgDzYFL5Cuqzub8Av9bgFgLJPmZsaxoCzpZwwCoXbhPgaQ11Hs8Nrvtyjag3kTBchcFrNdkA",
  "key16": "yWjG273By82Lw2VaU2pjTz1Pdm6fAHXK8MmYnWL3iT5jbzvDNpDS7CuQT2e1LTHDi5wCJfWDd7gzRzniw6h4dmQ",
  "key17": "kKB5Ktg7NMmJCwXbzSEh4J3ovarhMUGGNPw3eGwn14jbmgk32NXFCariEVuY6YLe27opZN149FRnGH9ZfeWDXBn",
  "key18": "5cDA4L9se7AZpv7iWA1qkFThzqNALSKQngUEvthhyRBiBKnrohuwtC5CTPpwgASeZXbc8ZE4TfcWqFn7LP68EHrg",
  "key19": "2nFCsfn5a3sKETkqQ1ZfxRruoTDP4dy8DcimKWPejHwQ4SFg89nL2cAw3g7Q94WVMaW817xQHf6Di1NAWrgSKNNP",
  "key20": "37vK8bdretEaZAm1hfhUQjstNkybEMMDVSES1t9r2p1u8f1rA5QPyAVgbEZ1Vx4Vo2M6GUubezUhL1FnuGeYZbpZ",
  "key21": "2SQt16oorc5wHjxKrFWFdTPNXKFygH5dXS5Pf6osYj2jXHWJfVRAW3bFCrsBsrRNymM7YEhq5eH9DTohvtVioPJm",
  "key22": "5saVKG4PrDwJYP1MM4pDCz85YsnAHQ5hm1vCCZpuCPVpMX99HZSi4oyfXxAcUySQLmgLSCW1xwtgDRPWBunQBpr7",
  "key23": "QqUMvj5dpoSrqJsuksq2oN6J2pM5oWk78TtA1PVPwZnsdCCJ6n6JmRBmXdref35zV7MGyBJD2iNoz5GoAoifEfy",
  "key24": "3iziQqcLH6j2qnz8vmWZQyjBGrXkFdPdnYWpuEoTaVseX1kdHkNNaFSjiE2PRzsyxmit9jTtpAH5mszRoQGV4AmE"
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
