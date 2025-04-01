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
    "3x2xwPP2mSXzm1WR5j95M3w6ypx1i5ta5GUQTHNgttvLhDZg8K46G4aackGjc5DCsqErXzLKkgSYpxoRbxsxo1nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yHeWiJ7hPvBwTkXszjaSTJoxvsF2MfA1yArqdjuxLRNW1hzj4fYc9Esvzfi141zRZGiNmq4UX4bDBigEtfeWwUg",
  "key1": "528gi4VLyGvUBYbFXP2JNMuKfF36PwYiKwqWAcEwBkMZa1T7GWw6F5ucwWKRzMoVmWnKCPo7EzkK2JUY3QKzoi6S",
  "key2": "546Thx7xySbYKmU79Ma2sG1EJyzbVnDUSPSzEUovrCJYFfTXgqmNEgRaUfB9h3VH1k9vLv9mKmL3SS8Q1CUe66gc",
  "key3": "5ryrL36W7gMfJrQEMVMgLX1X8itY6b7uw6q5u337hjPYptCsJsJSNgmbT63vvDAZRoaY1R64HGXzobjL4We8hQAy",
  "key4": "268BfE56HJgjtZWJDxvzh48X9EVQqS1nkJPbgnVJv9eKDhh5FvbBNExosohcuJc3sHVCUfTSXXNohHiWyvbfXU2R",
  "key5": "2vCvtUBosJfWWLVcuGJ96nxQXDgw9BKH7JcRynDce5WyaB8evgq8Ys5DLJ17tacVEKUJX7RUH7qPkcWZmZDBgqrQ",
  "key6": "5taiXA8GvLbV2MTYKJ3j3D3N8RERrgSbck95WxA5xMzDVECfzFUxkYi6CcrCpgw8H4LkerFMkUiurRSfkHshdCWy",
  "key7": "5y3sFwAtEBdFoJVJoHLVXTeFe8naRq683gZ3S4CJtWQdA3KUAnmcMhr4vgi5UNmnRoX8SuWXFHgW2oqny4UuDfBs",
  "key8": "3J282ptTjzFQSdnSkvgTp8WpdmjUJMM9aUXT7bjUhSvvX2QicGWJNfdnvxzWnyr9pqmoMkkko5a6EsuXe91nm7XX",
  "key9": "23kLNyELdpwhNjeFCgd7cR4W6E2n1eyTwC8fjnAimfbZ7FRyWVujYgSBTvemVTctjRjhGDN7N3CzPuPhvhpFm6Nv",
  "key10": "VVVaSjnCg92qm38MznVE2NhpmnVaneGdDz7FN4darPva3hzf364gvpSAWpNumvvc12YhASvZ49p4Q8auoj8MJ94",
  "key11": "2c4RQjn4w5NbHBmZZ1HEiKSHpvJjQNNLcxbmMiiXgejokSQsBrKMDsAzwpJjwrUECwrajzwZzQDrxHTmG7y8Foyr",
  "key12": "5G11ZPdSSX363gH4fu6R7sPa27d8sEL6Hj4pygiv9yCxiEnAvd8y1YKoQDaPbvxndt8XWvj5qjtDx91JrqdJKxhZ",
  "key13": "5kYoNQZdTTdXk3WhSBvdCKpiDFjqHrcsQos3AMV95z5kRjQ22NmBH2WU8653QuRXMHNBKryvY5rG1kMC15nhJJ77",
  "key14": "5Yw1YvxUhqvWjkjGQr3v7ofuLj1u6bK7yiFv9GxkGaTQ6K6gukgPEezRN57to8vaWbT5PW7H6da5yCML7Vztr125",
  "key15": "5D8UiXKHLiTQNyVaT6fM2DbvEAc4zFek9Kz18vjzZDHk5ad6ZWsqEho2bA56ZTq66ocFNH6CYat1xVHPsT9a9isS",
  "key16": "48Ji3BS1212pNM2iNLC4ESKGukgw9ewpxZ8nmZPDg5jQRXt67RkfcTFqPR2E76cii2G3JtBBbconoKZopf4h8qA7",
  "key17": "2roxpMhSUyL7qDLWa6jq2nWVN4fohfYefncMQJ8jgTHdpUSQbAdH6hueKu2AVshs7NWa58FFsVZrGszyr7MafYw8",
  "key18": "f41eWs7Nvvqk9az9yvFyR9krRiGBNuGmwiNpdtPQ7WvxUADWbzEsjebYro2Q5E4U6ZoaD7bUba8iVoLpj72oumK",
  "key19": "4RSDfcoiTaKbAH9h3UfAAnDD6Ki9aGkX5RmJoKdCQgGsx31XyLPTRRmWaRPAFqJJVAXmUYjUyBSadJYS6q298afG",
  "key20": "4gP7ZxKrkjmYaMUJniezwkm6rJ9bUe8K58Xo61yy373vrQC9tDWPLf8kZhyd1Duphx3idNhbCcY9Ge7AdNeVXSvu",
  "key21": "2KfZJuSMVxtiSQSfVv5FHeyvWnDLmpq5cyVytuSXpN2QZenLJc2YLih3eAkxiQsjGUrXc4Lnf1bv6Mj8nfS78kmj",
  "key22": "5C6n4TnDwxmNGkpcuLrN1VpvWZB2k9nGZ5Sh1aCN6N8B3veozzdZBdBugo9oMC2Q8LNiFpx2ZJHUCZ5tJmCHTNtM",
  "key23": "oSWQWN1Cf2jaCUQsvppvWcKLUYaC8jVWBUbE5v256qp6HxrZWRg9oamV2hCAZpJACRij7tgAHT6RfUdMBCErr7g",
  "key24": "2EymQS1jA5gvEoRoFZzacKMYybB3GhWLivD9HK3JVwNtrfyWFJsQGUBf7p1fvJQKri7EVR5ZbfiXfoNT9HNNcwPQ",
  "key25": "2bFxdZQmon1uLdcpcEHca2LjcK1vCaRLSFTidvgqvo8N2hakfhDm4v7rSU8AFGs8NA17e7UeK9S3XsA7wMFZEDKb",
  "key26": "2gNNv34ts3QPVVDba1AQ4L1FYgp3D7S6quK1a5jiozD33C6ADsBCmApgXonP4hHgXXLaNy9ZETbgXbRmF7veeHxW",
  "key27": "3XLKuWuZtJj6VYgpqznpBgyzD56iJRbSPhita9ts4cdgjxzMcGR2dGWZ57ao4t6HKo3j9zFhYGA6VcYezwvRw2dV",
  "key28": "3uLNNM4T7EGQnBkzPsyrUh14oFEGxZuJSCdvhV9RvRN3vRjo56vX9RREigHSET2veKsHo4pMNrw1x2ZZZTrB3qsU"
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
