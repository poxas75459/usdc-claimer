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
    "5WbMT2X3K2oSGb7bTrjNn1iQK6DfRE2svHBczY1oXJhtfoaqJLQDsXDsCTxZnfYMbieyamdRP46M5BtbQJ2YEfyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yDUwDBSf2k8XgQuqAD2DbXTfqhXD48U1ad2AmBV3t6ZTtXYP7QD8Wd8C8apRCoSnKvrr8UB5wudFiwdSusNaPhw",
  "key1": "kZQSyZkPzd1aC8YXL3zcTvKMGCBDZkBAqBvxesBMVgo6ti3P2NZLGfPyKiAQ3NyufkQQ28W7wgzFqBsULYmLQKL",
  "key2": "2EFcELVe7JJMTYko9kUC2hnPEBZVsmrqsiUgpDhH6PqgCAp4k15qubWRRqqajowS1cDSwR156ghzJRbMqDbUiKnQ",
  "key3": "3XYijjwVjz52pmHevz7CcnkPYbo7J4DGdvbW6V9HKS9EGiV1vg8LfJoDPuMm3kUCFgXhaTyPaKSxVQXBQz27YCH2",
  "key4": "5qtcE3EthwEJPbpR4VWz7Y3ptgmrqBzmK2EgXP53APUMWqD3PwKzvHoRopmSKtw5rxXKtJbv9Y8DN9JkVRkGPNRB",
  "key5": "4ff7RtTQYEzfivYvRHjg6FE8kBRQGhatCKAUeTtHigDoDhAVbkVEd2s31dHzMtaifUDDwkMLyTzahyJKxgR5mT2p",
  "key6": "3WexQPtPirdhx1M55ASYWKDYb4xCSsyGrK65TvrhtYTu9NG9veWWLWbPrEtvuwyEN8DkNZLFewcau8r1Yo35pELh",
  "key7": "2hKey5qZMCx9JHTyZDfGHrx8ndmsuL9vMgrLwXRorxJH5iK3nyygNrzTuyNuZqs33SyxZMwKpjCLTVjzLhH2TA1n",
  "key8": "5fE2WdQ87RZ5KgHC75D9bXwBFLhGPSpUQPNcdeKSumbqXSPkFYyfzSLmH5uDKhzioT6VJeJ7HLYVupusTMh9Mwt4",
  "key9": "3eSQMFfaZLRnRqXr7DAU6MZUphELTN9kocjoBudX6hTWbHDSNvq52PmDLsPNesns8XUwjCcXmzNubaJxmr6VZKbw",
  "key10": "3SnBotAvvQTVu3tUPSmS7DJ4gwaiyQPp9f5TFFqZDTTFWHafQ9ikoCuxNFdFUbkLmLp4RdHdUM4c9aCJXNAx1Noc",
  "key11": "2ad2dVEXmxzSygR4ohFZyUEvKFhWSZqQmbUfvWzaiHhLUGbX5noQTcUB6RLCUvYcYL5WMpehBX3ZjwGFvYKnB3pj",
  "key12": "31E1SFv8Lue7DPVLABtN4AZEU9G4fVuwAZcGNdHPFEhjERWRrbpz5LXwu6id758Pb21tiBqe7i4FEVdBQj4BWx5f",
  "key13": "4nSQuAmDLxhCF7dcqwM8Qx9fiMJSmHhhNZDi9Lyre5fmsdyhmPkFKUAooAs7UbA9H1VH1fd4vvjnYnZWJBCPU4Tn",
  "key14": "rDS2cQCrumT7ryFnBTqHT9rodUT5KFErnLUNzoxgWToR4fFLNmgmvuRZDMrA2Aimcd55ukC1wDb5Q8e4izXokVw",
  "key15": "4TScrqt3gbxpaN2zd2NxjCiznhcvvUXeGSsV7x3iieY5kD7Z7Sw6jT5qvco2ER57pzUPzdZLyn8Khhksgg2urcwH",
  "key16": "5PA3FRATBr3ZpAjpcEaQVx4vujRGwWddi45kLezHUDkAt2fTzSCJcpQ5K3xKZhnTCBCUzYuenS1gfmSf5wM67rHw",
  "key17": "5p2QaGitw3Ytxesam2rHYX9qhBCStWiQgUVsUpTK4nH7LLrFeVpRR7kzga2b2RXkGPEBGvnHyYByTgq7EZagxavV",
  "key18": "46cc8okBS1NiNfZD1qPt8whn8vM2iRd9B8FTExyWgR8Jxtn2Y1tER3T68JKXx9WAPfXBUoQCr1twAx3PAn4bFNyJ",
  "key19": "46SzyAMpDpkLWGCc1d4cZ19jdwHz8fMrrZ7NcVCM62TxY8SoVCC57Lzo4294agShVMD5S1yMPJrBgtfU8ka8WHQb",
  "key20": "3DZWBpyUWxiZnQHdmrb4oyDgH7GcYDVZhHqgPX16xb14VVk2k4AV46L6X97wDmJWK1K6FKDFTUKtDt3UccnCJWDR",
  "key21": "3wYfFf9BV6RXB8eCqHJ5348bPi3a77ohJKEREEekc3DBAb5VQcEF3DEqriasG2ML4CQt7fRAqVMsRJdEh7MTfine",
  "key22": "4eE61rjYYE7ps5YJnCPSxrjiuwu87zQFF4MxCr3PfmvMigHKAenUG2nojw51rN778VE4FoZ6NFtYeefZNnRhUs6p",
  "key23": "37vKomyXuMVYTRkQSjiAcot5SeHgu1xs3caXcUNoLAziK4oo2FAnfvycsnwqaQjLPWgchi31qRvJVqxi1Rv1iTPy",
  "key24": "NMpb3pZVnhUoLhf1WjGEtJWTYNRv2aJXMy73wtUEe6TECKDtu9t3ZKTg12G78woCU2Ajdggd6AdmYFeBNboqyBJ",
  "key25": "4QPK35zgpTxwBouwc9jTwLg15Z82nUqagU2PfxELXYF6q6d7dbbzU3GNw2iGfaQKaAgwLTQtqVbUyQniZo2qjgSd"
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
