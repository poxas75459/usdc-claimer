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
    "67XGv7UTcrZJv57GPcH5Mm6KxUVFbajYQFDPD51DKCzLmkXALcPHAbbiiXpUruygapKf5CbukXcvVwEKVEbYZhXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQgiA39bY2KG3xjVgF7JhNxmsSPsBDNEae6u135MWmkfB94yG5i6v3ryJD11n8oS7FX3XJZCwY8NK3QypQtyENM",
  "key1": "KqzgeDFvEbecBio7PiEdfN4BYJduXyyyKbjZra9rScunFhuyGv6YnLsWRc3ovQRxc6sdejTtGmErorqrU7t8Z1f",
  "key2": "2TSyuXg25ZvkSZ1FrhMEWc1y7kmBSLbbjrApGxaX4Mg55nbnvVKkiDhSDikJascGPG6bsDWeY1fRHNLMqSQkhRxg",
  "key3": "NsvrEwdpYJV9P6k1heXtcJQ6dtB1u1fQVTbci59kxEvoRKmGZJca8LoLEwLFXqNmBrGWkp3qXKG4NPdfbAw2a1T",
  "key4": "5kNs4N3v7Gt81qtBk5Zv2ZgXXEBhTWJY5H1gpXnFt2mvE9C9LfsTLdHi6ZyRPztrD1rvGdof6vVg5DcSR3FNLz8C",
  "key5": "3b8iZXbgWj7XjLS3SZ1dEFN1T9HZmS75tCYN8eMEJVqgD3FYBjovSy4ggqpMtwmm98Kr3rezGX1pESN51PLgfLC8",
  "key6": "7KRDffGeEaUwUSAiEaWxefdYzoyoF7WyLsHgj9QWELKySVhYch9j6swnC3nGwcHVuPXfrcDrAdN1motCZ4Kn7rY",
  "key7": "2Xh8sSF8YxrEU5GwfY32uR3VPDJpaJRpK45EdoY7XSe4UJVYgZwTGTTBqmrGTzTEoSJmJTCvvAb13Q9J6jptUDr8",
  "key8": "3fJcG1Uq3zvNCg2i9Agn8LwJYyKfZ3Vuv6oFZTagavREeuQ2uFC2R8HFQnRchna2aq7J76u5EzSzhCerAb4CAceQ",
  "key9": "3xUSde68D2GSatskbRk8BFoJb3BG6v9epGDjRKGeqGo86vRP6h85fTw7UjZ4nkyhQfCNBeH1TC1VDRqFoug21UVB",
  "key10": "3sPoBugNx4MbyaTm584m9E22MtBFGj17NJKwv17qaaZdcYTax49vw3necKQuvU4CxjNPhXJRmttCueZZN47fHezj",
  "key11": "3NrBVNQi3SXzZUAH21RV1XKBfif8xC6Ay317SRCAUeEWN6C9mJ7Ju2i9fGyMpyh5ofHLnyGeuRheFWRSzXe76Nha",
  "key12": "wPP7NMmNMAtib72J64HU5TeGgjyiN434JrK9yPFRvnhAGJByfkh8j9VVVQBQX17GEPbDXY15KKQnd2sUNvwXoXg",
  "key13": "2Hfoh3dufoz5f3geeAv7zy972gVM9LhRrSpVRB8nD1tvBxwkXr3pkgZ4LcH9Nai4QdD3VkABcPBiJjFShqck35gj",
  "key14": "5X2ehxv821v7HgY3M9Vimn4FYY9R4YcheasLWf7fo2UNjtJK78toPuEuQgvMjAXfDHiYw6xcAh2woWRxb2EH54s1",
  "key15": "3jfKwmdsFuCNuSVu53k3KQR9ZAAHqQHxQWLNETmbTPSU7tB2NSjtVshxqSx8B8t9gfWg46vkcexD1Ym9hp6wZHrM",
  "key16": "y87kfqVurxg8iEtjau7EAsBgeuYCR1VHpL1rjmuJ4oWEr5JU45Gvh2NcqxofGNt6LXB5nG2Akz2CFkSFYRUiZSR",
  "key17": "662vkSQprbrCCUvvM4cyD19kgFEbTWynYb3eb7MPLiWbZJirqcG2a2HmSS9VfYGLENyK7UsQzavC7TUGQzi7pZeG",
  "key18": "25fe8oMsJxPPdD9Wb6xY9tWhitiqoCwCuGYao1w9MpqMijn8ipofHWCeR7236SuD89Yjh664pV5gpwXmSSTbnnTi",
  "key19": "2fU3TqhWaFgGAgQkiFS9gZu1jRHur3NV5D7JL8AckDJBZ17YiCfcHVoAZERhuYSt6iPgGbFoUn4qCqbQCm323syJ",
  "key20": "3Gc3pBeP54t2dxWhZLLh99kwexdcS1vPiC9G2AJiezZpHyMDYVbQmPxgEGWcn61sfKgvnrfT2gSFrPvyTf1wCBJT",
  "key21": "3VHoVMbKrg597xbCcQfyNR6kh3oVNTKoF8GSk9j7rG2qdc6ZqbcaZ7PgwMpNr8Teq5bkPaCq5xbaPvf99zBETsRu",
  "key22": "4B378CvrSDHgN7H48Uzi9fq9T17tNFKcPbTwLGuQyPBx67o1FsFQnHu17uf2dVkZKd8zvwwQY5XYhfV1cdozTpY4",
  "key23": "pa3NQg39WjJA1c8fJHmU4zqyCPKmtASB6eqpnW8sGFuDAPe7DvMbrRhJqiqZRnuRjjFckpBWt48dmGWarBHuJEf",
  "key24": "tifdjTz8xPX8EnTqah4DMVmQRqciBY16aWi6nfqbgsS2RUMU2QzgfZCfEApcmPkDdBasXwvqgXYdbgrJQsHzhX7",
  "key25": "58AyBUBY84K3ZZKgseVo31DQZFbc9qBGDZ9YZahmKFd5qr4wzA6nF88wpYUvsqxmNUq61JUKbEPLQhdVWDgvMygo",
  "key26": "3erEwpNLp7HjRX98wmRFbqToDjVEzD643AHazWWhjt7HuFHPrrXf9kTFTfiDneJ7hpJDTrQ5GKgqV3f5r4GeRgWw",
  "key27": "4ELWvabTXJDeKofLcCbvUd5fvCNPo3Lq7sSS2mCFxC8hoHxT99PvTGfVzUeFskQ1XPc4ZLX7VJ8NTxDLiaJ67vYH",
  "key28": "3gwvtXUKqbZbksmMsEum6Sr8HpzYLudeXvYeW11gEYLSoTHxG6phKETTyeXYksdSFg9URnABmgnoL2z9SpbUUDPo",
  "key29": "3wUoZwvL3DLkMj4jL1VLsM4CVxnxcw3UncbNtngLk27zrpbKVD4FCuZn3itQ7NDs9EptZNXcMaMNeYBrrMFJneui",
  "key30": "nsSzEs7k84Pt16oqnjtYWMDsCJLbgYvT3xxPrdQqvF1Sbed57kZHbJRM7sNNck1JFtwCRfPBWqFLgQY4rtZjpPV",
  "key31": "5L2mJKnJki7E322zyupbSEK2XXSxqapSW9dwEP4rxSTrKPSCTbrNxyx3Tgs1KpqgtfxQz1UVDwozF7eFyFsnJC9A"
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
