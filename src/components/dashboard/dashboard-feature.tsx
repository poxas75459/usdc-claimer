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
    "2GFMpVV9TUEWrMWvvA8oYQ62vju7J8osxxT21KpRHW2AMTZvfqRUMvsvpPmR5qGmnvd1uy7nnphgiNwUrMjKKVT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXnaSrVJPqLsUUee2Pd3sG91pLcaAB5Fn3v86Kf8ZGQa7JBYPaVJKEjaPjC41DmfxLnprxtyYJerPKPc32t5dzv",
  "key1": "kMKkRnTf91cVEqhvSUyVykeazuoEWDEZptxTeWFbFcDLK9mV4Lfy8pxW8TGZtcMzG3qYLzUWFLjkvvp26KGARoB",
  "key2": "2g9qobXiPdhrTn9izkNCHLKzRtgKGcY7hqZuhLcAJi1w4JqJkmjt6PkYJiQSaVPbp5Cu1hEe3vdu6sL8vDV58B5s",
  "key3": "4kzX4MRSMKKNV9HZPuw9gh8X8y6wLUiNdrhHjubf1kkYyPcSK3K3bA7S5eeAbivKRR4S2QzVLMEaPPJPDz1A1MbU",
  "key4": "5PEtvkTc8MXP5u2YXPgCfce1JN3UvisbWxUaE5xMKhNpGWXwKVfat6cyq15gdc8tmkvPGfdkpURUJZ68tG2gsjtY",
  "key5": "4NbX2tSAn7tBeMDG7x6Q4tg2FahbT42JNhj3xbAqWgX78xczaEW4jmjmzbRgv74H1iuffFjBwUdMK7AAKPLrV7Zx",
  "key6": "33yAFq8aESQgxmtoas5nNhdgabZyeKDatmmJWmhJYjM345dErpa7w5EnbzMdmMx2marBQ3E6aGJzMz8ri4o8Lngv",
  "key7": "394BUpCqrJ348zhc5vvQYwYdRgJhhdiu5SSaoRR6V8iSyWL2os2niAixQHSyxNmSmnksNg9r7iwPBJYSiDAvtRV3",
  "key8": "2xEJrFxrDpTSMXeQEDakxAkzdVKLHLgW1DtFra98EHSTuy7e8LXSB5wUGCgEjiZskY3n6n6AGLG86PQPgMSjTh9t",
  "key9": "9esh7Q5b4Seue3HoRMBzjD2PRuLGc5CyrWtjSw98FFHbh3tKiTb2pPLk5ozP5X7HZcRQBfFQc3mpZLuVjkXpict",
  "key10": "4sNDEEyq5V7hHFFWWVvyZSMnpcTo2JGDwcHT3ao27uws5kJAxpexUXQU5KrQsqiLJiHN5GMJVZs3xtLiARd8v25u",
  "key11": "4fRanbw891uZk1WHKppU34YUe2KsAx87QGkAR1bLrW7f9sYXo1k29Kjsxu9NtwP2HiSvA8v1w5DFCcPxM8c4s88c",
  "key12": "62DuF99mgQBRjdsqu53zjiRqkfsLUoJ552EMnrSGA6M8o2hvdYakmWAHktxPEZtgV6Khr2F96n2kjLaBZsTehHWD",
  "key13": "XStXBjHEEWfgN3NbNJuTRKa95La7uqf2uy77SJ57o9vbTj7fhXzNAHFmyZSPDKBwDN1WTTnUSmp7Zqrsq7w9uZM",
  "key14": "5eg8gmAY8k88HwGDqgbXMqZN1sFsyNevxqGuYGbEtPPPLnzozYBV72e6LHaGuUzVDXtwZ2pmxyzhNYcv9fRv3oFZ",
  "key15": "4wCPzc97hRJX6MekM4vREMjnUXbPTW7rTK2o1L6VEvX2TpwWYs3JoUheWHduqdduXuTezjsZAuLvdXKZ5xpddAbh",
  "key16": "2aHTjrdaJMabc1k57HfxXzGgC92tQuhqzdHxvDYsk95sSLr1mX9C8QmkNG1G4qwpKQsggziMoFHjzs8caN6DarSA",
  "key17": "4QymHYNizorp7xb4xgTR8C3M9ynYYQhgJCbk96dft8ZTc2jBbk39MMmhAdVmkWWA99mdaFvbxeFkFnaYrJQDUZ2J",
  "key18": "5tpAgxULkfdzpvpHcNnsLBXgBCq5dVp8cUXxrKRSauYDxXsjXnYeyJ1b6HsKZN6uYbZsLtcfkUUeZJzQPjzyqzac",
  "key19": "5hbXDfkfgWy473oxNgNkgp2UAHRufXroiyfpQug3gbHqEGjVpx6Vsb7e3oFW17YEfKtPwgVfsZM9RfXCr3kK1UQq",
  "key20": "dnxKA6W6bjurjPVw2sXJJrDdC36AbUC7gg5gj9jdp78D4E1wjH7SDS8fNH91D3Y6TvBsvNEebqsaBRYRoJ57G2v",
  "key21": "5JMj4GxNqHVd1s2Q39LRmvWcQHPYRKcJpmYVDQV68a4VguWRgGQMDSFJsWnWhp6TtDuBgWkoJ58MkGG9HEz9qN2H",
  "key22": "3ThDuGeH95E2XovbtejL6Ujsp2bE5jvAKEgQfzJE29X91eYfkBpUSaB5ZHrvHt4FBAQsMTm6ihYCtteySZE28pF6",
  "key23": "5r3fB4Wa72FQ24XY3gynykkEp3mWsqh9jmP8o2SurkzFbFNRPFKK1kg6HjUPmwPR6TZw8gcJwXEybPxBJJEaAw9Y",
  "key24": "tkj3FarSbPbK5G4MZAh3g58YZG2CsCtpXnsXdqSsmCz8xHPcKxUJXUGwBPyJv5GdAL61yn8MsczDQBNJ53ZwV54",
  "key25": "2EDCw9iZSRkenVYn4NbvSZwgTWnpB9q1VMPUC4zTTxu4Zk3z6Loi7ZpE63jpDZ1CLpRN4CHsDKtnokZEywFntmPh",
  "key26": "3dPHqbHgGfc4Fp2wVRgaAjhh64JKonqRSEQwxbyjDzwhJtgcm9467gdBHMUVjURJ1XRF4b8872yRSSXo2exJnhMp"
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
