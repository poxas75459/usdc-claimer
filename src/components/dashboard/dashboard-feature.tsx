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
    "4hMY2ZZa9qmCMcMvjqef81vMCQTptnEFTaPM4LGJc2ZpxCrUqeLrQspottBJ57nximxZbovfj4aBKguig9eVkneb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4vmHY74Cx8J1tcT1abjwZWyVtcTdedjN29AR1rmxD6EEw26U1GW6GCBTTtTETsoFVwy3wfEtazuEpuYZcK46gK",
  "key1": "5grDBfzNxgjW9Q9wqy4NKAyfi4ZYke8gpfHpR7nno2M4HPynwpkNMw9rar6Tc7kfjLCXhprwis991K4rbftVNCAA",
  "key2": "34b91TWrc2m6TJb2fxbwqA8siegWBNnPuvSG6ABR3GHzTKw5nm9s7YH7ows5xNQDYqXvtCArG9CHykVdBLRoKCFL",
  "key3": "RBndG36jYPiA4Yx11aSepoYncui5Yx8PtVw5dPvBTUY4jRZ4kK4tFxBstngyDVK57Mv5HuLeDGAoHHbxgCaqgTi",
  "key4": "5ccTZR2SgZPKMZ8FCkBLn4LP95ujn1pDjTQt9YPPSBeXVGZdU7nt132KtggjHHBKNTCSNsu1pTkNqb94w7aXbpuA",
  "key5": "xfQskBskhcydJCSni9oRAU8wv6B6KTqvhraJRKS8TNmPsgJSDFyXGdZQb3MbauvbpXSgm74yWgYm4YXy3m8T4hA",
  "key6": "3K3Hwz92Wska3yTNgnnogN6aN5Y8fbiP3Axh2wbXcH6kDGN6bzArxrRiTWfRQ9wuA7SeUy69uyQ7KK8ZwfUrMuSk",
  "key7": "5qPsWybNnm6VoM5nrs3LMgutuTHFSEYqt5v7RffrXqhEuFaSiRPmi6vB74EBUTiT2pkSazbL836fRRTkVMx9dLFm",
  "key8": "3eJJQcYJuGys9AWgtwfyhS7XUXNN7wA6iW1qENFEG9GMqnnNkCcfyHGUEUHqwCLwnzqL2mr4vhdfZpRtZ5hBYcjm",
  "key9": "3EXay79tfnRbnu5NyLwd8WF1KpmwMHMSkZ2o7afZNjxHBfACp1UrMhRH2Y9u2ULeaVEkKx6HoEL6fTbSe8ppeSsE",
  "key10": "2vgDkVbBwgXfJbDMDZNVCJrs4HhLV1QKFnYAY88xPQGFVyTkEeydhwo6PTRzhZ2WzGiU4XpWoMuWGk5axofKqPiA",
  "key11": "2C5VBpxaLtfehNRDS5DVRNWbW85M4iH4Qep84CAm15iMBdEwwhFMmG8Sqe8CThqtfzUS3oRgfVbFqxHrwFACqAFP",
  "key12": "AdDaMtqRa4YBkKk6mmrZShvebs9PNmqS9c6qj8hMh29ShXzjRFdK67NMiEcAttpWmrz4eBcRALUPi7HEw7Wd9xt",
  "key13": "2PSP8YE2V8k94JYkzUzAJcNAGHoQTTrGDRb895zepofQRMGdSrxu28JiKh4wZTQTE15GFNFY5PtNRiRbGnCKnNFQ",
  "key14": "3DUZaRRVghwAgb84g3DCR4Dr7soiAY8cfsf6xGZwkzz9BpR7trbXN6potJxV34jZHhENrwbnpnN7pmPM8UEitox",
  "key15": "5v9fQwAuhKV8owe1gE1ZFGNDxzgU4Xm14yexYBxymhes5JvN9khwayJWL6yH67GiL2eNddq65v8Br63KAkL67PSm",
  "key16": "2dXZCbHgEm79q11SENrPqVJ5skAGm76CWCVAKrNCRgsX8dCjxBJfLXAH4j2GYd3c85S4EKAAUP3xohTKkRCdzydt",
  "key17": "2Uto31cmokD5AzGQzpJ2ENWWvVnypp9wYjCcmoGJ1jtXu4s143MEvKXWvjWeTzm4P8EqxjYwyqjmnEd6Li3FHdHL",
  "key18": "311poe5sHmoA9xfhiftSUcMUm9C6Lg5u1snZsmDqRHCgqFXkHkFmTSuX3KJcaXsyesAQi1dz2C13oPwjLSMXABCZ",
  "key19": "2jF6C3Ba9mH8EJFDLUgaccBCSK7oZpcTaghwvLjQcFA5JWd1VpU3WeuTaEJ5LYvo8XvjyBGAeQtrQn2XXS5Hf7Dy",
  "key20": "3B1B8Xto5JoAMUfQgRiid1yx4T2J7798EcCuToC62jxhterVFFpoJ3sRdj5JPApp9RDWwTJjpDCTKBg3FD9R5JSe",
  "key21": "2ftKaaS6borE5Kyn7seaWF9E2wPP9P3buKHup38G2h8q5WDhLJ4hL8JKJCXV7X9oTmn5c9PrRBZP5Jp5HhErt1Fv",
  "key22": "5Had1SD8fdYATjhk3drFgvuj2vFush5SGjghYEZpoETAvFTHXezwngszU1JAqRcGXm1JeoYkgq33DrEgTSCpLLju",
  "key23": "3vUmVSCn83x8dAke2SgZs5YvGrgkTPuSaT6fskKx9VGZV8CPkfxE1rGsMytSmYHdJof4DQpfJCzHjQsQpHKvdgPm",
  "key24": "6PXDGqi5StVj5v5yM4NRgfAtqWyPxMqoo8994uejr1mMG61QSeLnkaPK4nTEkWb1ktWf9myoEw6HfB3jcGkJGer",
  "key25": "3T8ugy3L1daHT23f57gkAtGzdMHd2MoNi2SNgigKjTnmJXVciuea2fFioNxWiP9Prk1wUpg13FcAv5akbrwxozRP",
  "key26": "3Usp532YATLN1B46Xnm8oMAH5ENoa9PW3pP2AVzks8HXrgN96jaFhxPYkgKzxkaeQ8XeX9nMgDcTDJY9gcUbdPMX"
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
