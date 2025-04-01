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
    "4Wjx4PwMf7Le4q9uwQ38pyvbTeZiqgVwFyE4k1fhTH4MV3wZy73yhzfEFqDw18tCt4FSAFj6ucsEmTqFamJgEiDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fcu9dUUxqwzMGt4N1prtrVfn4jTnXhqDktqz3hEvWukm3FHw6BT3ErnoFfyZhHLfAegF5LwPoTX4b5HTWSzp9EY",
  "key1": "3mVUf1Xt3J2ZoCgpJdoTgQYDx6McwFkYvY8NoAxGUjCbgbfWfkEgPN4LGj1gVFBzbUaT8JkRWdR7nTh7MSTGBcx2",
  "key2": "4i4Q3AxGWJtMv2Y3TYmUggmPsLoLSeHuov3R5zdF9CUAhV31VsbCYFNPSH1kcHxHbMC2VJYZiNo8XQFDcivYNanQ",
  "key3": "4YHTb8wX9uFGcMyH7ZjuTez4WFZzfxTEHbGQmgbUYPJ5Tc1Rnwd1Vzttm7AQYz2Aw7shGGMzrRppH4ognixsswW2",
  "key4": "5XYpaYriKBGaHQSHiaLEfnLwD1YPPPyftwPkyE3SaqhpvbgNyt5AdAw5wfpddnL4UHf51etSoAEZAa2eYr6NzrpP",
  "key5": "2BN8Zy77tEymLCwLeUnJD4pjgpgbpKE94BpuPq1wxkFxaFQRG6sXKvxZsFpC8u8ZtaJ9LAEfNvx7wFHtdru58rwA",
  "key6": "3rstNRhvcpdVbriYnoh1frWrLnM2W5fPEruN3D4bYwRCkZVo9kJd9CEvG6GZXGTCbJtsrYNEhcNapbpcvYcRm93Y",
  "key7": "4RjbYYo47NFz2vTqXA7PHQerpmBMDkPZoKSNtu2otdYBgkju1rRRJHympcnrjQTMQnaCHn8NAR4GRy1kgdvW8F54",
  "key8": "4chgHUjASrWsWpnaSmxnqiRxDE3nawNypkJhJcqJMmy7DuC579kF4ejAcmUXqckyGsfeRcPwVgiDQC7sfEWdBHG1",
  "key9": "4XigbxLrYrx7cCAfUrS2GzC81nrP1FM4GPsFesXpeU3aGm1Qtduy3MAwWS2hT1kNYsUaqWqUa12SRr7rD1TTzbmq",
  "key10": "utePBgUHApcs4N9EQSXQuAm29tnCiCSLmsTQZi96nyVoF8ivgPKjLPRiZ9UM4xnL4XehYx9zom5PnAMom2PHqrj",
  "key11": "2FE2DWijmeSxH6u8u62A7VNQHzqXoizJUY3QMZ5ft76bPwDraBKLpBHWaJhYJuV5SSsC2GDwv9kXLHY3fuJ5CNzC",
  "key12": "5QygYzmVCCrrkD5sdGE5YQVm6QSF5mCHgSj1r99XBg28w4J6Edv1HCCWxRREbRe8McT8YMoqiShbEhYj2PshA8ry",
  "key13": "4x3mhb3yNwcgC2ybgLSThgVgMTc6JnqAzP3sBuznVoo6HZKsFEBRaodnfYFDx9h8ZoiN9yfCmZh8pfvAswj2uSqz",
  "key14": "LGCFwftc3FGDqTe7229BA1VwuGr3zos1mBMmrXXvjw4eWEh8gkmhwpNa1ygBxitEpBQZhd8nyco6dwbvTidTPKY",
  "key15": "3RMdw8WFakjs5xWorwmjCXHfr5QKZosw3wnCFj1F31zgHmWnbEB6eXtznMVx8M64L6FC6hRDbqpX5v4ZGbaNUiUE",
  "key16": "3h6aaV9uWaf728tBxP84pH3vf7F93LN6hEjYEit7rGFC7tzJ4MAhFBJxuYczbYCqVmgrNUkZhmREqKQihhsxu3fD",
  "key17": "5YPd7iEkH1Q4cevwzf5hoZhVxCZV3HWujikKe9JDPD9sUfkiufxNMpwwdoePhNLucsUXiD9Sb2QtTBEzjAbF44Bq",
  "key18": "4VfgaiARjUGuYxEjksRF6a9mDWgotgYsaCrssGczyneUDpe12fv1qNbFt8sggW4Jkgb1imv14E4sMVuFpe83ovTU",
  "key19": "2t6MMFC5sVJMmkkUxdApGF91ae3yHfeMm5aKT5718ZdTdwDDzKZDVgiSntbQjxMfWyNxF5fDN4gahjfp9bWLE2WN",
  "key20": "2Wcp9nvwkw5nBXM1vJbLDaj1kxQSqEBHhD5TDs2aFdmGM2EuzMTG6Dcpt3uaKB7mhW6GYzrodij6jdi9oRKDD9vN",
  "key21": "3gTT1NBVqqcJkAYwDDy6tkGK5T5KENyJLooVV51TY3AhpEA3pyy58Zd38EfiUD1XWXngp6CiSHuqqzf146nmdxXB",
  "key22": "4iooyQ4tVWSeoDKSwBBfQA33RaGJFe77C2xsfWaMkXSbhHS118iDzdt29RxpAKawHSja2pSh7bqrRiBqbQeotG9Q",
  "key23": "4WaraikoqhzpGxkwcEaAg4vtV6NDn8L6i1A68HqvESVDU2GymhBTArzDvLuWvZP2m2dboKN9xuufCkZ4M4gXQJtP",
  "key24": "37sdF1VX8GTNVDC4FLfhkM8WbSUAozdt5bTByUz5RgdConSqr1zUbhc1LdsEpFnc42WsYaUNHtXPESUTEVvMZ1B3"
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
