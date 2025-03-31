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
    "3x8NmqND9y4tq7iyenXyaN4m4TqquTTkwdCh87ci3oNNkWLpWa7NDA7H1pXEB8LgGBMDWFEkEpUSJdqADjKH34Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2V4hzWDwgCnSGahhsV3EmUE3rnFa1XvahiK5Hcn7Uc3qebhjJmJ6CMxqtqrgSZcVJRrU9LmCEjuz2rWGqGYVzm",
  "key1": "5hrTFqJP9MWdzQrfTkBcpshjWRgX8cffKpn3sDEXjsNLBh9sKXMwttQ3fkiUV9nBEtfU1Fz1CpmphoR9XV6FFRZ6",
  "key2": "5rUNbWTsVEJLeArYMDfzr954XzwvvPYkSCeiD4ivLxgUs4RwgSxhDBvW8mEjJmpEkFT8ATH34Mm6WwFeHUfWLGKx",
  "key3": "2XPTN6zpEPKG14RAoS4DL6gW6BeKbguTPrAi3xW7UKTNWLu9aSVHANzAGqmAHza1XcNLF2GCiAbpZz52QV67v5eR",
  "key4": "631phBFsRs9AzECShDQL2Z1AMYWJA2Pwz1M98bFdNBeU2nDz97VNb4Jnu8HfKDFqUiR78g7m1tNaPJZ6ab9DgmeD",
  "key5": "46RQxUVZukBSn1SDdXwC1zN5VR24RuQB6weHkzzZfMwwpDkPPdRLZtu4ZfhHhGhXMD1rPotxtmweKsppA3RT81G",
  "key6": "2dSCQkmkVTK6uRVafR9ezCXBzxDPn19G8CPEQs3f69kPZaa4ii6KWPSFAxfoK5uGknRk6CGAwPCGdfJZudhpJofV",
  "key7": "43pBYH3npB4aYkvUNYhQnEESgoUGHVoYHztZ4GwErBegxAUjf1wcCGQxs7KmopUGhyaSTvDVqzqDEZdAfTJBgCTq",
  "key8": "3TjMom5Vmd1AvFQwe8gsHPygXUKThTLfujxo8dUD8PvG9QqUXs6dhqEHfQjTAPG4SSHVwU4ZZyctH9khG8VdQT9m",
  "key9": "3yYrsy4gaHpRtRQUbH9BwCMgsVqBE6HqShyGMRxuw6BcU9T86j6MqPZeJ4TeBnui65FUxU41KCHneLD8ijNtWDSZ",
  "key10": "dZUqC1KafrMTZBy9uXV9rwi48J1ZXGkp73YBBUH2kxfYD4Cc5X9qtnAQuKcYmEMucNjXTcXaHWrMg8ydoWn6FYg",
  "key11": "3c8omh3XTrijL87e2Bz8FXVTVVFpVW83zwpvuu4kBnL8KsqoY5YbjW8B6cA8bNdtaXHXjcPJnF7Ty5142HzScgD7",
  "key12": "65AqB4xwPkz8mbYHEx1JaNBz5CtZ9f1xDfVocqbLCbSxCwe3pVrMCsk5p5tu6Bq9Q3taFFcSxzQJajk6qMosD3c8",
  "key13": "38t5eJWKt4zWYaM3v2sbo1fsSXFj6qcmXwEtgeUwJYG3rkd27dsB1uUEwZSCDLssz9JoTt9CZ2T6YFKRumei768L",
  "key14": "5mZFoHY3CqbEGgqny1LzmyXnCwZTYqz4HDvxdXyykvqFPNjAXjFABSo4dfHa59Za8mdxf366uk1Hjxdybb7uFJfh",
  "key15": "4GsFtC7B2eBJaFmyW3tHShE6hSTksTdw5pxtVrrKfkroDaTVd9Q9HzsZxW9rfNfC4KPSY5rz1zg9wJ27NMb1sgG5",
  "key16": "3x3oBTMaS2vVwj3kY2RKZDTb3qkKjmp7PAL8upVcvuEwNjbrEF3FWXuaiT7zo4oJmX56orZwYLWP2wo6sP9Fyiuh",
  "key17": "JGThucikxCTp5TkxgQGZq6pVwgwb7zXutiVVFBPHKYBkG7P9PkRXvRfT6sN84r5TRAjcH2Co8is7HHXHbvTurXS",
  "key18": "64QB6gwxTKfcMHAai4kTbSj9RFuSZiHY8tdaQ7PXYCsiGM5SH9M7AygFyLvZ1kcyM9d268gfphySW5xiMWJzeBF8",
  "key19": "mDv7XTcoH1ziW7tuWpSAHeAErUCYrpx4Q3Q2xZwH5d9ZyAdKUHF3pauD1wmcdAVerdXHy1TLQLXdTqj4zR9MtwD",
  "key20": "2vfNjtLZ6u2wLLa6FYtcWUPsRSLSuUsmTfoQ9viobnU4tTgDMgotmdczedTu4S39dMGUQWd6vzZATCu1HTdEwfBK",
  "key21": "2qnAEhnZVFfKL36Uur6ekhYDgxZfLa61Ltzird25oH51Zhe47wCjgtrLJK6bMs9scGbwa2YAiBcod8EM3ZoWDjoo",
  "key22": "3KZho7WciKaMCyFUHfxqwBdP1zPxTBcwbRLtBjzaES5WGSeUSazXpSUqT9kdzLtZMZfPeJvx6MBYAkkBvtEfg4qt",
  "key23": "2V2Se8xBoGLEB8KpLVFamdkfsthjsbFedH73yQMD56C28gUXHnUQNJvrzpU58eahtL23TAt9BpkTrhqH1r3bTMN8",
  "key24": "2mBwoTtcHwURp1sCyKjY5vVnY3bzpk6TNpAZXqLngb5B4DWmnRyrYcwafGdVhKsdgreLW4KeKdMvNsoMHKUVpHMT",
  "key25": "3CsVvfMsH2Mk6w5Cq4r433TpCTcECHJgAwtn43iRJnbHkYUJJT5gEAciiHdKyQfBwr6vZAJ3cwTw3E7Dg3AqVkms",
  "key26": "2mPoUGnAW8Tc1rBzTNCN6kgMU4wVoWcPT18VWCpy7Katk7bfpcHfMRohfsvJWhTA4uTgTPnyL74zLwwLTjED1Ssu",
  "key27": "2n689oveYHV5hWszpdybnywrrpEbEQTi8jXbP24Mr1xp2QHFd1VqLff3p7TzLD2FPaojmkTaLEmGHz4GgQZ1Nirs",
  "key28": "2h1daCXSZ4i6QvzAGZ1ZGkE4TU1NT9Qhw1SSNNpk5rHnq2TtxEFZAz3WiPN68tnLR7Eb4AcNM1g1yRweVnQg2iL1",
  "key29": "2yr8QNCH3dE7p5WzrHW3xDW4MrJQ3g8p3KAxLh1VDTLXVK59nYSzDGK9TrbZC3ikQ244S4Rbj63NZ3srKubSWfA4",
  "key30": "4DaRM9HXfTkvjbKBZKYZ1dbtX99WTdZdKreoyUhwU9Tuz6G7wEepXzvcKhnaWAaDkZ7fS6uQqNa8qDdmfWLm9jaJ",
  "key31": "3ZedHjyTMGNiAfLWh92LfwuF9TzMSaSjNhncpbhK2wUvuavG1LKghxo1YJzbf6wwGpTfpGwouJR7vCRQ26D8zSaB",
  "key32": "5SfKEKSwC5zLmD1FyQqaocikBXeUUZm4gzsVSc3hQVGZdYJUF1jXyUG1gCn2wWs3ExjMUk97nByurmvuWr2DYCjx",
  "key33": "3Mi5V8x9nUrfghPdrr3GWJGeTUz6y3AWDCcpDAiN5UFprwQcsEHwcJVi73ebzHcQYb2eJRY8i1BsWoYM2qJsyUn6",
  "key34": "5i8iU11Bd6nAQYNbiAFR6HKbB4Bt33yV8yE2xqVyYZPULLgGU6da9PKRt3hfYayRTvsBsGJD7FXiaEcYjBUc8hVM",
  "key35": "61rH6R4H9ULR6aLU5575tMfYadWaHs1PaiFRNJ4CYVHwyngc8JuvCd7vVQ5RmWgPmPTt82rd95qDiaYfTwyhK9Lh",
  "key36": "2BBBryGVRVhoseu1g4pdFNSXUzbyZJES35A8N24x11QLovh7LuoZzcVXJ3fkx6VdRs38ameRdC21qmbu5CuPAHrJ",
  "key37": "wyTYUGu43BjdfCJjyETgkXtdPPdE2CedVspi6JgHkBqUr5RxhfMGXp9W81SPawyrZWfxKq8GjTEyAHrp8DPTQQG"
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
