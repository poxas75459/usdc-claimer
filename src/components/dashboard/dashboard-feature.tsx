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
    "5pY4cxos843DWVmSb61fFUn4bbipkiAjr6WgbyVPgiB2Fbe6d4wZj4QhC23qCdXBvp1qzq3MyhdmpzUUCuKJ7zcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBLZux2GiHGM14zYX2GgabxqbGPhbzYcZxjnc5gxd6NSTZkMSdeKGT5KaFwb94bMYGsyhXTazUtJANMkkNL1tS8",
  "key1": "K8GmWJgmcMfVnnVY9UqEyUQX15jyV5tcy3gSCUw71GyUn24UbAAdEkJzpYHoGNzYuLFXrf4gUFUbHQMu3TsAGDD",
  "key2": "4AKMKhHo2Yd2gWJqHXhRgYRZxrh5iSL7kGe2ZYB6zWKmEQUhnhZyLVA6DqpdqVcrrcpVrVZuvjKu5GTD5wQeXPLr",
  "key3": "4zpdbBqikunXNd4n6WB18bJvPupE78rQiUGBHsKPq5KfixkqRBQMY8UHR9NHJurR6Se8Ch6K6YFp9YAJrKarUFSD",
  "key4": "2XBf4phXF3uL8p9vkbLB5J6vDNbC3ViWZkWM7FiioXExpHyjKf9uAaVJYmerMmquvpmDHrW5fwQCPcYGpFP94vSi",
  "key5": "4BTsySjJonKTABqtbUnMGZ4CxoCzKyw8VQcS3hAwnwkuJJqjeGWvzgmi5QFzAw4vGK6Yb1A3JbEPjeuUz2WsEEtP",
  "key6": "3V9f1vC9JH1tdEku13UDwjS4wGTHfYWWPBsnnhVJiHYT4qbMCfTwcEdxhzU2oqUt41cfmD7jqTPQuxmuRTtfsQWg",
  "key7": "5Mri7SqveD4daBJ7iafxmnV7eihA9ayyxMgmtxs22E11619WgoZV964yNmkLakRYswJC3NZ6XeKnFTG236zX6ANg",
  "key8": "5aXy5Qpn3ceZvsShrB73ZJghBWPs1hMUf3whANJCcNotAjdSfBVn3AHGchHK1tRMiehqaURzuTeuP1KbjwC99p6W",
  "key9": "4BxCqDYPCVwZjcCUKab2gbeq5ZJsxyySqHY4ByB7PuxbWLAV3ua7cG3jZujnv3WYShYCaSsx17aApSJnvQpsEjCg",
  "key10": "4jmLKUFvtkopFj7FJUA3xqbxxjjyr4FahcsdahupRyc1iYxYPABj5pYr1BG8mnTZgASTzrqJj7qTSjBYgGvHbp4z",
  "key11": "31rq95mNt7KVQTMuk4yCpnSXoef6HbPVNczM5ZQ7qg5rYJXqspHnPRFXKpjhtzsjMy9kPXidGc7BSK2v5VAyei7Q",
  "key12": "28WhDqcqx2XH3o6L4aE1mf99Fj3LC7KPaRRo4PSTxnuT81hxs5vCsWbLPpewpAfT877wcyar4izcnvq8xkaEnisr",
  "key13": "61fy3tQfeKe1CpFDzbB9JgavaUwRpHyx7FnoJFuZW7rBgGheURqxxYajqYexc6EdLULHQ87ZCTpH4naAXevY7X7g",
  "key14": "2P356xhP6MQXj2Mr62W16p3pstdfY3u765UJy6GwFkNpvbAEdNAgeSx3BkdnZEMy2j1GA6JoASGuN2dm47eGX8sE",
  "key15": "3bTm9YagXAjHwPKJgthYEUR52Tvigp5rumyoV3LRdS3EAjYZxPHS4GocR1zjKQxZjvaQgArxj25TghU92HSx8Tca",
  "key16": "BfKsPottJKkj95Q2bJZd2dgvyjkthGpaHP5gKJxcF92VUqVXnbYevM17GfnNqGLN8KUgkZKWGqLCTqcSoKtJdyF",
  "key17": "2gZEB6STn83LeYWxiJx9gtXwW72mLLYvhJQw3VzLvUQ9BFUEwDBFHPVcMzmy7KSt3ggavZqxj3uHUCjByBDfDFVv",
  "key18": "3AgMXSX2tQPEmUS38ppLKS34cgPLvgGQKZaY6uxLdWamxUQ9kGnzkGgdHx4eH7KsW9EbxtzwauEK1YLDRj4Wb8Dh",
  "key19": "5U9wfZ2kx1nA78DMDSSjAqZTcTELmKci4dhHF17AzLmHUuCgWtDL7SChJG6fkj5meSmFxyTrA4py2XnyQ3vv7eG1",
  "key20": "MVBWQz2ABSYYkd2xfGpX1yZYBncoonxu5p7fg6XBsZVH8VqPwtQieZB6ZVP3VtzoR8Mc5JoiCzgvamsHdgzCRdP",
  "key21": "aWk5xSFYj54u58gtVA5S1qDdfXg9VNhjnbXnHDPSP5TzZXp8eTabaNJwx5enLmY7owgKqXPBXJqxq9tzH6zUjW3",
  "key22": "4HjLTpFwGZKPqmZU19h288BC4EMbcf8XLwTQfGA2UKNuoc7drQpNhDY4gjhvUp8JPnXYvb5F9GvxBte7GVRNicFy",
  "key23": "3nmnRsentXJZfpHDwJQpetzJkik2mE7P8XXQ1aFH3tFEK3UiAagKsjMJwpNeXo6yyWAai834AQJpoKP7BseZ61qL",
  "key24": "5AEaFNttv3v6agfZscRCMQE3qU137AXYKQU54AhkUtciJhba78F4hAutBGqawbjotXoGnEhcEiQhAwyMkQvjmMRo",
  "key25": "3Tf3WmJkxiiXmLPfe7yXf8qBkKm57zQYFEiydHoV2qqeMqPcbH37FQVnG8qt71RaRLidp58CLofezes8H1KVcufz",
  "key26": "nkxEdHVot6HV4XSUsedARQocyqxLdL1VeNuH19TCMNYNuMSm1f1MrjfPoyY2k2JLkeV4vNLnYqNZxWdcnUiZB51",
  "key27": "37BN1ESMFZGXZjkxF4oBzYuSzWamSWWApJUETBhxMzB5V2ZXSwEKb5KAukjGnyV5UFdyxHfN1iL75pWgqjPQnv9v"
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
