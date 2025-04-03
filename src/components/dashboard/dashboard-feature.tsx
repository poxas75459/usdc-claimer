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
    "31ZUfi76eDw3eixEHNyu9yUojAjSW6PCVTjdrjJRqmmdFZSAcqHgPNMoE5cMJhosxet57MsMVptoSiD6vkC3hsGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A4Vd1Hd5nX22hLBPbkpz4tkU4MfMypBZKoee4gUnVQC5Tx2gfgWiYLX6v22wmZZLeL2Bw5EM7tYLwqBTCqmXk4e",
  "key1": "2QxDjtGA5GExE2hvX46hUzDFYZBDEoq9LQTPTXTyeLxBYwY3oVST9qdBWntaF2EchJJ9qjrp3hgRhmZeNEh6ZyiT",
  "key2": "2hd9rUK1trh7gCBg9KKQ2NXm6s4zHutHn7kbWAzFEkAAe1ty2FLBKZAvxWuoGvhhqQYmSRLjcXtrdwreXGpe6NPG",
  "key3": "4xRMZ1bhjiyzS5y27o3ntLz9jtEyGfNuF7qvKYUZgtq8Y9QYbBVw8oCY18Zuesx8m6TV9PrSt41n7sbBCkEHRtHe",
  "key4": "2qGJCp3fRHqYAztBPKkYQjuMyq1wnEbwVcFNFd4mgew3PDFJLkPNi4MX9KcCzDBU57z3MZMLMGFqtZ6g1BSLpc7J",
  "key5": "5J9CnyVYMvfcyCYrNUQzb3hEG6xda4xyVkhSaXtQTfPPHncVRbciNqu8rp5Mi74y4rCjFvL4mrbaaVVatCdqbCtn",
  "key6": "4aTx7JzmKnHThDsB95L1PR2cMirSyYNVaNMa47TpYLimXfp13keyzyDQLkrw94fVFVVjRDZq92i7hohvKm8uFVvm",
  "key7": "k1PQwTjeoszcNwghRCeRvKM6aUae8nwySUb34AncoiJmGm976Hd7KXH6srztqS34VzhW2PbDo3YsoxTmxe8Yzsy",
  "key8": "51QMdyfchbk6cDh4q5LSmUHdBv1J8DdwZknfDGiP5VGUxWXucFspqxm5CLA4qTCj2eVUjNMytUAxkCKhC1Yh5RDM",
  "key9": "5NQvHh4qNWmHVMdodAd6NvvErCsnzuFBxsxkyzhjYdPHPqvzoaxKGKr2FfnA9zJcg8nn5Fye8GHAFfsUEoYHosH4",
  "key10": "3RshMVFM5dPP19aPqMc1himRhniusm5CUv2zkXJa8mwQMRFUhqMdNHa4ZKGBbxqWEbzwZQ1Hg1nqHhJgqfcSa5Bf",
  "key11": "2sitw8Esfx2g7VuHqinQWdbdH3QMBfKNDibVcLmTqyNfe12HEUcEc4NbomV3iw1JLuwP7UNtgDHDi5MKEuCtKuSp",
  "key12": "33oL1hGjotwDdoo2w3qTp1UaxH5uHQBe9rNoHE3FX31mTReywFC7zSps1LFDVEGaWtnCHRaWX1tB7SYwjvhaScMf",
  "key13": "2GhHoTkQEuVVaL3Zk5zJz1gWJuVfTzBX27nr2KA2YqL8hq4x6qoQyDAbqkDXGeufypkWFEdBExebsAAHo7sq5SAE",
  "key14": "GTfbCfmXWRh7KJYSDFtSW65qxs2yByHx6WGydjka53hxz7sLsE9w4DaqqSMEgDcipGMdTB4PjJRCW3Q8VkrHSVa",
  "key15": "4UkqCFFJ8vE7i7L3SoWi1sNbALPdPRDL4VvT4V7pvvY9rhw2SgKLXcYPqoztLX9yzmWt9798HHp8zY2JNrRHrKa4",
  "key16": "3sLuJub6fF2ZNX3FUoEdveoZHD8VUudRPK9EExkzfjwcvA9pi1zEyT6cWU5YcsbFjZmaUzVDTeHoYg25co6UXmNo",
  "key17": "3bUABByZZzp1MYAhz6ZWPB6gnBEAg6o4iupexmHEDEsMXKjpEqGL1vDdsN9J1PBbpR9vVbytxhvdSFTjeJpuMCRs",
  "key18": "416zVakwsHy1V4uidUuPxPR918srt8DmWary9FTQ2EySnhQucsQfC2THLXn6cWVTVizf8dK1gKBRHLYWQJEghzox",
  "key19": "5yXWEHNf3EUAPqzHi46NsL5HFEaQsjKJisaFKVp7BA6bYdPDrS55VxL6vf4S2AjxNww8AzeRiKQcrSFytryQVYwn",
  "key20": "3iguqnQ5zKMnQZ3jVgviidDMCtxQfffPRwyHh8hRYUFX7FeJ81f8wQ6weBzMYdHhjRdpCT2SwjKX7YVowL7EuRGS",
  "key21": "2DQUH2PSaqMhm7CUNP1suHLshhXZnhZVPDfxhBUDBz6zbvSNUQ7Y5z5KFtJWk2v1ifnusRFuVeuv685J7jnfkVEm",
  "key22": "Sdn7bj4CETHhDbP8xG2Z1kfzA1Ay8RRSPid3wQ5hptidhACqoxUKdBQgLN96taAzz3H9TiS9xWYJfJV49KP5dL2",
  "key23": "52gm2PdHp9Cug8Vwo5z6tdj2b1CByLizR6nigtwpUM1t125G15c1L1fmYt9fiBzT1oUCQmiwkJQdpWoYmAyytcnv",
  "key24": "2UPHJC3KWEUGKauDNDoDVNYYkDM2ZHxz5mym6FT5rNBi4nz2YExMzQwLL85TkkwdDzeawX6XUFL8tKjjf8UJDm8T",
  "key25": "upwvP8gU8LUNhzbbF17sk2WkaxjrCgk7CnwVpRjomm8G3yjdhEtxvtsCM3AYpUQzUEJDdccd3KLny6dNVzyWASW",
  "key26": "39dye5bCTk94SmtYRAkB5z9mTqmVrNAJN4YEaexHrqUPe4PXABeCWDsbHdDPxYEL14DzsnQ3LCHHVm2JJEMk24z6"
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
