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
    "5EQXmKkYx52dMSkLhcGcE3vXW3sNeWR3z2VToc4PZBRSUMfvQ7JTHVsNLbeg1aZTsbfASfzJJPCS7d6eXWmtvomi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oETEDLC4a4SyhS5MsLVyDaxh2s4H1ebird9dWFtqncxWJUg26zZq7g6gxb5vzc5HJJhu77A1g9KFQaAdgiNGykA",
  "key1": "5WLUK5scdQoUJLXT9dBDgwTS41Yso29siFYSk51Y3apRPxFxWyte6ZaFchzZouZxkxwz8wVG5hiAtZEEF3WBdKdz",
  "key2": "2uEWLP7JguzULWedST6ZaFQZQ46EXtDBRnv6hGdkWuKA5pZwxgfnYdKfL77LrqoRrEncHNjSgfLcW4E7YCWhC32o",
  "key3": "b6YSuoMAxruJVZYKsyEiKcW35n9DoYp31r9hczTj1Ebf3ZQgVgHbVt7MioninEPGrG9Wj2MNmfPrMG6XULsmfgN",
  "key4": "4vksRty3287au3zZ1DuaAstwtYe2Zq3tGgjrN2dbvgzTCxFouMjSSmnm82iTtDP6Q8EDeVeRSLmTpu9bVfTVJ6Gd",
  "key5": "2tPKxLcN94f2hdEFj28SCddrwSbfoYXxPk9S2C6fZ7dHdKzq75fCe4Xkf1vGsXJ4Q2VHnTeDAtZGwLPufn7HQccg",
  "key6": "2MRreSEdJigZXugqmoJLUfGJvR2mGsagnzBHYdpbmRZzys3f2ppumue3DeHgzqi51s7kr7LUJ9dsL1MJYH6YgLKP",
  "key7": "2FiJ6vmqcLEuzcvERWfKvyUxATfJm8xTpcX2PgSiHaWKj8U1LmRCU66BLaPyBDEyXwoBGCGrQ4s8bT5NyERFShjf",
  "key8": "41WMoYfCRJbGJov1jr8tEVLVNyV3jFUTq3M5ksbjfJHr9k4SgmpQ61UGmUo4qcZuUYDZXgFPXd67WJ4yjm4T9Tq3",
  "key9": "4BPkRrunawJsfNj9vEFEnHvqrajfmkkWVPn2gUe1hynqf18JXPdMyVhxxMtKRsAep34NDiRUeKrsRMTS3f77iBFD",
  "key10": "XNmvLsNBTVCmTHbPYYE7irLSBK1pZsJv5DQ5vwkqQnyukjRrL6TNJtenn25nk4NzZVzESFZf72L7AnUiQsCbiYt",
  "key11": "2Xq8aMi4zn3HWRVoSgXoWP8fH1drK33zeopkwC2RZCE5zwi1BSZfwF2qMqzLGFDN8BpX47SP15LAPKKKMWudxwXp",
  "key12": "1YhKHJDCzAiVHcLrcEQToH84LqYv2YohRqyV2akZX8TBMVanL7xQCZtR2QrHDE6Vmq2ekFYNVQFij2B24JH7eN7",
  "key13": "2pgJnErZZeKSz5PzjYNi2o5HZuMpGokP7hXivyHBPgiZZxvTWGyPRhKTPG3cJgH81Z3GpEvZZGaBynq9a33nSW5K",
  "key14": "4Zsk99kpn3hT87ErN1b1djMs1aTDUtkdFAaimyzhKBACdXKFPRKG9iSX5MkqRpKKrPrhb1q2H1bdTaW822hPuWKq",
  "key15": "5VP9kYq3qboHrf35R1wYywmpJZpJuyb4c3p3zaqXJJPgmySCYtmHQm4vG3xEoQU27oYHgxJXPgDsQkM91cmw964f",
  "key16": "4ctdxP5jioaLXduAQauBA5hu1hfbqQPYi1rjkjZQtL4kr4qVXVJ6Anj4ECb5Mw8ujyuMzCHSpRnZzkdnTmJYpLaK",
  "key17": "58GA8e7iTc3FZY5Jjj6MkYxzFVZfdkoSaN2mNqqSRm5ypnkbpj7E7Y6KJKvWZQVdd38zKgKeBZwBiY3wWFdHksig",
  "key18": "43sVpFpkfwpgEakBdg79qyav9Euau2YbWUDiqrps6fTvfseuZM29u6dUW4mjJSZpFFf93Nz5aBk25z5LDsRwvcom",
  "key19": "4GThakPByx7MzWwe5pC59jRXNq1CYQbHt1SNuiAHaEnKL9ae8arGB2VtpurgRVV9uTdF4voA4pKVri3BupKvjvwU",
  "key20": "4UXUcx5vjtabFajaiK1eB2z1ffkMYogVLYPWnJYUxPLgEooZjeqhz8Du14XmXWHyQksfjUywyCLDXNA9kxXfxgNi",
  "key21": "3ngda7Qq5c5qvVY9xHQL7Rcg4rY5jx8s5k9bfyD1e1hHcPBsXD7RKQtk66oUy8y2tJPeDNjDRZbmBuTMC8J8daAf",
  "key22": "53xfP3gANkLY5zuuACwecdKE1YYhr36MJmbTYq8zzCLt7onhtDCyz2P9gU8FSgH5AchbX5p9TUynMoZRTchxV5f8",
  "key23": "3m6shLiDw7pk9VJ1Y4HkbLbuJ6j9XmNCHX95ojQvZmH7y3ssCiZb1P9LJbUAwvG7Bm4nt4UANkSyWk9YrWpT5YSn",
  "key24": "4xpGQUUP75kNMWUEhpVd311LC8JwqoHgL7jiQqqK8Wyu4ysv1pe2DrdVrGLx68VYvsmnGAtAmfAwRxzGq7Z41hpr",
  "key25": "4ZoWnUNVs4yZFsNucm51KDy84wv5k5163vtzBsW7URVNGdMWTPtJ4gH7d9QV21v4Nd1Bu3QDXT59LBa75ToM2ziZ",
  "key26": "4GwUmJBhu3Ps3ot5PkAab7fpJAvc7Vc74eG9JyKr38bhGwEJpFuBXVgVDMzAu128vPGom9nrjQWFy33mnvMtNZLb",
  "key27": "5LfV1eNjPaxaGdGfsYtkYvwUFDEDZRW3hFQtAqae2dnFfuK14TQdCCsjGuHZpJf7mwUemDbgeyQouFjBUirc1heJ",
  "key28": "5dCD7AqxSp7yKkoevDSrB4E56g9YiUdMqZgxe6vHgnPiAuqQFyJ2UFVpbiu5iSbnYYEoib6tXy5jNjx2kYtTYjuY",
  "key29": "5WCsizQ4kPS55jqgsEHrxziAPeQ6fXfgb1MAr5BBE3ASJFTu2sNQamME8hbeusnXZ9KnRp2dj4aLFveHKNGaishz"
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
